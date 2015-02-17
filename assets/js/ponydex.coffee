---
---
###
	Ponydex
	Lists and shows detailed info about ponies, moves, abilities and items.
	@author Silverweed
###

class Ponydex
	###
	* You can edit these to change the Ponydex behaviour.
	* Beware: resultsId must be changed before creating the Ponydex,
	* or you'll have to manually reassign dex.results to the new <ul>.
	###
	@defaults:
		# the dexbar wrapper div
		containerId: 'dexbar-container'
		# the div containing the results ul
		resultsId: 'dexresults'
		# the div wherein detailed info are shown
		panelId: 'dexpanel'

	###
	* Allowed opts:
	*    data (default: dexData)
	###
	constructor: (opts) ->
		# the dex data
		@data = opts?.data ? dexData
		@results = document.getElementById Ponydex.defaults.resultsId

	dump: () -> console.log @data

	# fills @results with the dex data matching `str' by creating a <ul> and appending it to @results.
	suggest: (str) ->
		@results.innerHTML = ""
		if str.length < 1
			Ponydex.hidePanel()
		else
			ul = document.createElement 'ul'
			@results.appendChild ul
			headerSet = {}
			for type of @data
				for elem of @data[type]
					if elem.startsWith str.replace(/\s+/g, "").toLowerCase()
						unless headerSet[type]?
							ul.innerHTML += "<li class='result-header'><a href='#' onclick='Ponydex.showAll(\"#{type}\")'><h3>#{type}</h3></a></li>"
							headerSet[type] = true
						ul.innerHTML += Ponydex.emitHTMLfor type, @data[type][elem]
		return
	
	@showAll: (type) ->
		panel = document.getElementById @defaults.panelId
		panel.innerHTML = ""
		ul = document.createElement 'ul'
		panel.appendChild ul
		ul.innerHTML += "<li class='result-header'><a href='#' onclick='Ponydex.showAll(\"#{type}\")'><h3>#{type}</h3></a></li>"
		ul.innerHTML += Ponydex.emitHTMLfor type, e for _, e of dexData[type]
		@showPanel()
			
	@emitTypingHTML: (typing) ->
		if typing instanceof Array
			return (Array.prototype.slice.call(typing).map (type) ->
					return "<span class=\"type type-#{type.toLowerCase()}\">#{type}</span>"
				).join " "
		return ""

	@emitHTMLfor: (type, elem) ->
		html = ''
		key = Utils.getKeyOf dexData[type], elem
		switch type
			when 'ponies'
				bst = 0
				bst += stat for _, stat of elem.stats
				sprite = "<span class=\"result-sprite\" style='background: url(\"/assets/spritesheet.png\") scroll -#{(elem.num % 16) * 32}px -#{Math.floor(elem.num / 16) * 32}px transparent'></span>"
				html = """
					<li class="result">
					    <a href='#' class='dexentry' data-type='ponies' data-key='#{key}' onclick='Ponydex.createPanel(this, "#{type}")'>
						#{sprite}
						<span class="result-name">#{elem.name}</span>
						<span class="result-typing">#{@emitTypingHTML elem.type}</span>
						<table class="result-stats">
						    <tr>
							<th>HP</th>
							<th>Atk</th>
							<th>Def</th>
							<th>SpA</th>
							<th>SpD</th>
							<th>Spe</th>
							<th>BST</th>
						    </tr>
						    <tr>
							<td>#{elem.stats.hp}</td>
							<td>#{elem.stats.atk}</td>
							<td>#{elem.stats.def}</td>
							<td>#{elem.stats.spa}</td>
							<td>#{elem.stats.spd}</td>
							<td>#{elem.stats.spe}</td>
							<td style=\"color: gray; padding-left: 1px\">#{bst}</td>
						    </tr>
						</table>
					    </a>
					</li>"""
				return html
			when 'moves'
				conv = (x) -> if x <= 0 then return '-' else return x
				return """
					<li class="result">
					    <a href='#' class='dexentry' data-type='moves' data-key='#{key}' onclick='Ponydex.createPanel(this, "#{type}")'>
						<span class="result-name">#{elem.name}</span>
						<span class="result-typing">
					            <span class="type type-#{elem.type.toLowerCase()}">#{elem.type}</span>
						    <span class="type movetype-#{elem.movetype.toLowerCase()}">#{elem.movetype}</span>
						</span>
						<table class="result-move">
						<tr>
						    <th>Power</th>
						    <th>Accur.</th>
						    <th>PP</th>
						</tr>
						<tr>
						    <td>#{conv elem.damage}</td>
						    <td>#{conv elem.accuracy}</td>
						    <td>#{conv elem.pp}</td>
						</tr>
						</table>
						<span class="result-desc">#{elem.description.replace /<br.?>/g, ' '}</span>
					    </a>
					</li>"""
			else
				return """
					<li class="result">
					    <a href='#' class='dexentry' data-type='#{type}' data-key='#{key}' onclick='Ponydex.createPanel(this, "#{type}")'>
						<span class="result-name">#{elem.name}</span>
						<span class="result-desc">#{elem.description.replace /<br.?>/g, ' '}</span>
					    </a>
					</li>"""
	
	@hidePanel: () ->
		container = document.getElementById @defaults.containerId
		panel = document.getElementById @defaults.panelId
		Velocity(panel, {
			opacity: "0"
		}, duration: 100)
		.then (e) ->
			panel.style.display = "none"
			Velocity container, {
				width: "100%"
			}, { duration: 200 }

	@showPanel: () ->
		container = document.getElementById @defaults.containerId
		panel = document.getElementById @defaults.panelId
		Velocity(container, {
			width: "40%"
		})
		.then (e) ->
			panel.style.display = "block"
			Velocity panel, {
				opacity: "1"
			}

	@createPanel: (htmlElem, kind) ->
		data = htmlElem.dataset
		panel = document.getElementById @defaults.panelId
		return unless data? and data.type? and data.key? and panel?
		elem = dexData[data.type][data.key]
		unless elem
			console.log "Error: data[#{data.type}][#{data.key}] not found."
			return

		@showPanel()

		switch kind
			when 'ponies'
				abi = "<em>No ability yet</em>"
				if elem.abilities[0].length > 0
					abi = []
					for a in elem.abilities
						abi.push "<a href='#' data-type='abilities' data-key='#{a}' onclick='Ponydex.createPanel(this, \"abilities\")'>#{dexData.abilities[a]?.name}</a>"
					abi = abi.join " | "

				panel.innerHTML = """
					<h3>#{elem.name}</h3>
					<div>
					    <img src="/assets/sprites/#{elem.img ? elem.name.replace(/[\ ']/g, '') + "/stand_right.gif"}" alt=#{elem.name} />
					    <dl>
						<dt>Types:</dt>
						<dd>#{@emitTypingHTML elem.type}</dd>
						<dt>Abilities:</dt>
						<dd>#{abi}</dd>
						<dt></dt>
						<dd>
						    <table>
							<tr>
							    <th colspan="3" style="text-align: left">Base stats:</th>
							    <th>min-</th>
							    <th>min</th>
							    <th>max</th>
							    <th>max+</th>
							</tr>
							#{(@emitStatCode elem.stats, stat for stat of elem.stats).join ""}
						    </table>
						</dd>
						<dt>Moves</dt>
						<dd>
						    <ul>
							#{(@emitHTMLfor "moves", dexData.moves[move] for move in elem.moves).join ""}
						    </ul>
						</dd>
					    </dl>
					</div>
				"""
			when 'moves'
				conv = (x) -> if x <= 0 then return '-' else return x
				panel.innerHTML = """
					<h3>#{elem.name}</h3>
					<div>
					    <dl>
						<dt>Damage:</dt>
						<dd class='dd-desc'>#{conv elem.damage}</dd>
						<dt>Accuracy:</dt>
						<dd class='dd-desc'>#{conv elem.accuracy}</dd>
						<dt>Description:</dt>
						<dd class='dd-desc'>#{elem.description.replace /<br.?>/g, ' '}</dd>
						<dt>Type:</dt>
						<dd>
						    <span class="type type-#{elem.type.toLowerCase()}">#{elem.type}</span>
						    <span class="type movetype-#{elem.movetype.toLowerCase()}">#{elem.movetype}</span>
						</dd>
						<dt></dt>
						<dt>Ponies</dt>
						<dd>
						    <ul>
						        #{(@emitHTMLfor "ponies", pony for pony in @poniesWhichCanLearn data.key).join ""}
						    </ul>
						</dd>
					    </dl>
					</div>
				"""
			when 'abilities'
				panel.innerHTML = """
					<h3>#{elem.name}</h3>
					<div>
					    <dl>
						<dt>Description:</dt>
						<dd class='dd-desc'>#{elem.description.replace /<br.?>/g, ' '}</dd>
						<dt></dt>
						<dt>Ponies</dt>
						<dd>
						    <ul>
						        #{(@emitHTMLfor "ponies", pony for pony in @poniesWithAbility data.key).join ""}
						    </ul>
						</dd>
					    </dl>
					</div>
				"""
		return panel

	@emitStatCode: (stats, stat) ->
		opts = do () ->
			n = stats[stat]
			MAX_LEN = 200
			return {
				width: Math.min(MAX_LEN, n)
				color: Math.floor n * 180 / 255
			}
		min_ = Math.floor (2 * stats[stat] + 5) * 0.9
		min = Math.floor 2 * stats[stat] + 5
		max = Math.floor ((31 + 2 * stats[stat] + 252 / 4) * 100) / 100 + 5
		maxp = Math.floor (((31 + 2 * stats[stat] + 252 / 4) * 100) / 100 + 5) * 1.1
		html = """
			<tr>
			    <th class='statname'>#{Utils.capitalize stat}:</th>
			    <th class='statvalue'>#{stats[stat]}</th>
			    <td class='statbar'><span style="width: #{opts.width}px; background-color: hsl(#{opts.color},75%,35%)"></span></td>
			    <td class='statminmax'>#{min_}</td>
			    <td class='statminmax'>#{min}</td>
			    <td class='statminmax'>#{max}</td>
			    <td class='statminmax'>#{maxp}</td>
			</tr>
		"""
		return html
	
	@poniesWhichCanLearn: (moveName) ->
		ponies = []
		ponies.push pony for _, pony of dexData.ponies when moveName in pony.moves
		return ponies
	
	@poniesWithAbility: (abiName) ->
		ponies = []
		ponies.push pony for _, pony of dexData.ponies when abiName in pony.abilities
		return ponies
	
window.Ponydex = Ponydex
