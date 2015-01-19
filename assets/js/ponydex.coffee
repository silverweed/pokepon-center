---
---
###
	Ponydex
	Reads data from dex_data.js and prettifies them
###

class Ponydex
	constructor: (@results, @panelId) ->
		@data = dexData || {}
	
	dump: () ->
		console.log @data

	@emitTypingHTML: (typing) ->
		return (Array.prototype.slice.call(typing).map (type) ->
				return "<span class=\"type type-#{type.toLowerCase()}\">#{type}</span>"
			).join " "

	@emitHTMLfor: (type, elem, panelId) ->
		html = ''
		key = Utils.getKeyOf dexData[type], elem
		switch type
			when 'ponies'

				bst = 0
				for stat of elem.stats
					bst += elem.stats[stat]
				sprite = "<span class=\"result-sprite\" style='background: url(\"/assets/spritesheet.png\") scroll -#{(elem.num % 16) * 32}px -#{Math.floor(elem.num / 16) * 32}px transparent'></span>"
				html = """
					<li class="result">
					    <a href='#dexpanel' class='dexentry' data-type='ponies' data-key='#{key}' onclick='Ponydex.createPanel(this, "#{panelId}")'>
						#{sprite}
						<span class="result-name">#{elem.name}</span>
						<span class="result-typing">#{@emitTypingHTML elem.typing}</span>
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
					    <a href='#dexpanel' class='dexentry' data-type='moves' data-key='#{key}' onclick='Ponydex.createPanel(this, "#{panelId}")'>
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
						<span class="result-desc">#{elem.description.replace ///<br.?>///g, ' '}</span>
					    </a>
					</li>"""
			else
				return """
					<li class="result">
					    <a href='#dexpanel' class='dexentry' data-type='#{type}' data-key='#{key}' onclick='Ponydex.createPanel(this, "#{panelId}")'>
						<span class="result-name">#{elem.name}</span>
						<span class="result-desc">#{elem.description.replace ///<br.?>///g, ' '}</span>
					    </a>
					</li>"""

	# fills @results with the dex data matching `str'.
	suggest: (str) ->
		@results.innerHTML = ""
		unless str.length < 1
			ul = document.createElement 'ul'
			@results.appendChild ul
			headerSet = {}
			for type of @data
				for elem of @data[type]
					if elem.startsWith str.replace(///\s+///g, "").toLowerCase()
						unless headerSet[type]?
							ul.innerHTML += "<li><h3>#{type}</h3></li>"
							headerSet[type] = true
						ul.innerHTML += Ponydex.emitHTMLfor type, @data[type][elem], @panelId
		return
	
	@createPanel: (htmlElem, panelId) ->
		data = htmlElem.dataset
		panel = document.getElementById panelId
		return unless data? and data.type? and data.key? and panel?
		elem = dexData[data.type][data.key]
		unless elem
			console.log "Error: data[#{data.type}][#{data.key}] not found."
			return
		#Velocity(document.getElementById('dexbar-container'), {
		#	left: "-500px"
		#	width: "80%"
		#})
		#.then (e) ->
		#	panel.style.display = "inline-block"
		#	Velocity panel, {
		#		opacity: "1"
		#	}
		Velocity(document.getElementById('dexbar-container'), {
			width: "40%"
		})
		.then (e) ->
			panel.style.display = "block"
			Velocity panel, {
				opacity: "1"
			}
		panel.innerHTML = """
			<h3>#{elem.name}</h3>
			<div>
			    <img src="/assets/sprites/#{elem.img || elem.name.replace(///[\ ']///g, '') + "/stand_right.gif"}" alt=#{elem.name} />
			    <dl>
			        <dt>Types:</dt>
				<dd>#{@emitTypingHTML elem.typing}</dd>
			        <dt>Abilities:</dt>
				#{("<dd>#{t[0]?.toUpperCase() + t[1..]}</dd>" for t in elem.abilities).join ""}
			    </dl>
			</div>
		"""
		return panel

		
window.Ponydex = Ponydex
