#!/bin/bash

if [[ ! -x ./make_data_entry.pl ]]; then
	echo "make_data_entry.pl doesn't exist or is not executable. Aborting."
	exit 1
fi

ROOT=${1:-.}

echo "var dexData = {"
echo -e "\tponies: {"
ENTRY_FILES=$(ls $ROOT/pony/*.java | grep -v Pony.java)
for FILE in $ENTRY_FILES; do
	./make_data_entry.pl "$FILE" pony
done | head -n-1
echo -e "\t\t}\n\t},"

echo -e "\tmoves: {"
ENTRY_FILES=$(ls $ROOT/move/*.java | grep -v Move.java)
for FILE in $ENTRY_FILES; do
	./make_data_entry.pl "$FILE" move
done | head -n-1
echo -e "\t\t}\n\t},"

echo -e "\tabilities: {"
ENTRY_FILES=$(ls $ROOT/ability/*.java | grep -v Ability.java)
for FILE in $ENTRY_FILES; do
	./make_data_entry.pl "$FILE" item
done | head -n-1
echo -e "\t\t}\n\t},"

echo -e "\titems: {"
ENTRY_FILES=$(ls $ROOT/item/*.java | grep -v Item.java)
for FILE in $ENTRY_FILES; do
	./make_data_entry.pl "$FILE" item
done | head -n-1
echo -e "\t\t}\n\t},"

echo "}"
