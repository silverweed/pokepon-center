#!/bin/bash

if [[ ! -x ./make_data_entry.pl ]]; then
	echo "make_data_entry.pl doesn't exist or is not executable. Aborting."
	exit 1
fi

ROOT=${1:-.}

isnogif() {
	if [[ $(grep -i $(basename ${1%\.java}) nogif.list) ]]; then
		echo True
	else
		echo False
	fi
}

echo "var dexData = {"
echo -e "\tponies: {"
ENTRY_FILES=$(ls $ROOT/pony/*.java | grep -v Pony.java)
let n=0
for FILE in $ENTRY_FILES; do
	NOGIF=$(isnogif $FILE)
	./make_data_entry.pl "$FILE" pony $n $NOGIF
	let n++
done
echo -e "\t},"

echo -e "\tmoves: {"
ENTRY_FILES=$(ls $ROOT/move/*.java | grep -v Move.java)
for FILE in $ENTRY_FILES; do
	./make_data_entry.pl "$FILE" move
done 
echo -e "\t},"

echo -e "\tabilities: {"
ENTRY_FILES=$(ls $ROOT/ability/*.java | grep -v Ability.java)
for FILE in $ENTRY_FILES; do
	./make_data_entry.pl "$FILE" item
done 
echo -e "\t},"

echo -e "\titems: {"
ENTRY_FILES=$(ls $ROOT/item/*.java | grep -v Item.java)
for FILE in $ENTRY_FILES; do
	./make_data_entry.pl "$FILE" item
done 
echo -e "\t},"

echo "}"
