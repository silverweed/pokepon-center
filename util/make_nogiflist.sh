#!/bin/bash

ROOT="${1:-.}"

for i in $(ls $ROOT/resources/sprites/); do
	if [[ -n $(ls $ROOT/resources/sprites/$i/*png 2>/dev/null) ]]; then
		echo $i
	fi
done
