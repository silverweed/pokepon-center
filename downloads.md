---
layout: page
title: Downloads
---

This is the official Pok&eacute;pon download page.

Be aware that the game is in early-release stage, so some bugs are to be expected.

### Packaged releases ###
These will get you a Jar file containing the packaged game. 

* [Latest Release](/downloads/pokepon.jar) (06 Apr 2015)
* [Latest Release (server only)](/downloads/pokepon-server.jar) (06 Apr 2015)

* [Previous Release](/downloads/pokepon.jar.old.1) (4 Jan 2015)
* [Previous Release (server only)](/downloads/pokepon-server.jar.old.1) (30 Dec 2014)

* [All releases](/downloads/) (the higher the number after `.old`, the newer the version)

To play the game:  

* *on Windows*
1. Right click on the JAR file
2. "Open with" -> "Java 1.7 (or later)"  
*OR* like on Linux (see below)

* *on Linux*
1. Open a terminal
2. `cd <path to pokepon.jar>`
3. `java -jar pokepon.jar`

* *on Mac*
1. (like on Linux or, with the GUI, like on Windows)


### Build-it-yourself ###
You can also download the source code and compile it yourself.
This may result in a slightly faster game, and it's the preferred method
if you want to host a dedicated server.

* [Clone from GitHub](https://github.com/silverweed/pokepon.git) (rolling release)

To build the game:

1. Have the Java JDK 1.7 or later installed
2. Add the location of the pokepon parent directory to your CLASSPATH
3. With a terminal, `cd <path to pokepon.jar>`
4. `javac "@files.txt"`

To play:

1. with a terminal: `java pokepon.main.QuickLauncher`

(The [README](https://github.com/silverweed/pokepon/blob/master/README.md) contains more detailed instructions)

