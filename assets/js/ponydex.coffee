---
---
###
    Ponydex
    Reads data from dex_data.js and prettifies them
###

class Ponydex
    constructor: () ->
        @data = dexData || {}
    
    dump: () ->
        console.log @data

    @emitHTMLfor: (type, elem) ->
        html = ''
        switch type
            when 'ponies'
                emitTypingHTML = (typing) ->
                    return (Array.prototype.slice.call(typing).map (type) -> return "<span class=\"type type-#{type.toLowerCase()}\">#{type}</span>").join " "
                bst = 0
                for stat of elem.stats
                    bst += elem.stats[stat]
                html = """
                    <li class="result">
                        <a href='#'>
                            <img class="result-sprite" src="/assets/sprites/#{elem.img || elem.name.replace(///[\ ']///g, '') + "/stand_right.gif"}" alt="#{elem.name}"/>
                            <span class="result-name">#{elem.name}</span>
                            <span class="result-typing">#{emitTypingHTML elem.typing}</span>
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
                        <a href='#'>
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
                        <a href='#'>
                            <span class="result-name">#{elem.name}</span>
                            <span class="result-desc">#{elem.description.replace ///<br.?>///g, ' '}</span>
                        </a>
                    </li>"""

    suggest: (str) ->
        sugg =
            data: {}
        unless str.length < 1
            for type of @data
                unless sugg.data[type]?
                    sugg.data[type] = []

                for elem of @data[type]
                    if elem.startsWith str.replace(///\s+///g, "").toLowerCase()
                        sugg.data[type].push @data[type][elem]

        sugg.on = (what) ->
            switch
                when what == String then return sugg.data
                when what instanceof Element
                    if sugg.data.length < 1
                        what.innerHTML = ""
                        return
                    ul = document.createElement 'ul'
                    for type of sugg.data
                        continue if sugg.data[type].length < 1
                        ul.innerHTML += "<li><h3>#{type}</h3></li>"
                        #console.log sugg.data[type]
                        for elem in sugg.data[type]
                            ul.innerHTML += Ponydex.emitHTMLfor type, elem
                    what.innerHTML = ul.outerHTML
                    return null
        return sugg

window.dex = new Ponydex

results = document.querySelector '.dexresults'

Array.prototype.slice.call(document.querySelectorAll '.dexbar').map (e) ->
    e.onkeyup = (key) ->
        dex.suggest(e.value).on results
