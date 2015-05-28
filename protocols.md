---
title: Protocol Documentation
sitemap:
  priority: 0.6 
  changefreq: monthly
---

Pok&egrave;pon uses a couple of custom application-layer protocols to 
communicate between the client and the server.

The main protocol used is one called *JACK* (Java Awful Client-server Kit),
which is a really basic line-oriented text protocol. A typical message will
look like this:

`!word [tokens...]`

Here, the leading `!` specifies the message type, `word` specifies the
message, and `tokens` is an optional blank-separated list of strings
which may be used as arguments for the `word` message.

Pok&egrave;pon uses the following message types:

  - A message starting with `!` is a **communication message**
  - A message starting with `/` is a **command**
  - A message starting with `~` is a **battle message**
  - Any other message is a **simple message**

(This distinction is made by the Server's and Client's *Connection Executors*,
which are the classes that parse the incoming messages read from the socket.)

#### Handshake ####
The connection between the client and the server is set up by a "handshake"
that has the basic function to reject connections which surely aren't coming
from Pokepon clients (one may easily write a client complying with the 
Pok&egrave;pon protocol, though).

As soon as a connection is received, the server sends a `!youros` message,
to which the client responds with a `!myos <arg>` message. `<arg>` is
supposed to be the OS the client is running atop, but no validation is
made by the server, so it can be virtually any string.

If the client succeeds in sending the `!myos` message, the server accepts
its connection and broadcasts its name to other clients.

The client also needs to respond any `!ping` message from the server with
a `!pong` message, or the server will kick it out after the ping times out.

### Battle messages ###
During battles, the client and the server communicate via a Pok&egrave;mon
Showdown-like protocol wrapped into the JACK protocol.

More specifically, client and server send messages like:

`~id |type|data`

where `id` is the id of the battle this message refers to, and the following
tokens are interpreted as a battle command.

A battle command has the syntax `|type[|token1|token2|...]`. These have almost
the same semantics as the JACK messages (word + list-of-tokens), the only
differences being:
  1. tokens are separated by `|`, not whitespace
  2. there are no different "message types"

All these commands are interpreted by the BattleTask (on the Server) 
and the BattlePanel (on the Client).
