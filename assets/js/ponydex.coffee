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

    suggest: (str) ->
        sugg =
            data: {}
        unless str.length < 1
            for type of @data
                unless sugg.data[type]?
                    sugg.data[type] = []

                for elem of @data[type]
                    if elem.startsWith str.toLowerCase()
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
                        ul.innerHTML += "<li><h3>#{type}</h3></li>"
                        console.log sugg.data[type]
                        for elem in sugg.data[type]
                            ul.innerHTML += "<li>#{elem.name}</li>"
                    what.innerHTML = ul.outerHTML
                    return null
        return sugg

window.dex = new Ponydex

results = document.querySelector '.dexresults'

Array.prototype.slice.call(document.querySelectorAll '.dexbar').map (e) ->
    e.onkeyup = (key) ->
        dex.suggest(e.value).on results
