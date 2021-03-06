#!/usr/bin/perl

require 5.013022;
use strict;

my $file = $ARGV[0];
my $type = $ARGV[1];
# optional (only for ponies)
my $num = $ARGV[2];
my $nogif = $ARGV[3] eq "True" ? 1 : 0;

open(STREAM, $file) or die('Cannot open file: ' . $file);

my $line;
my $name;
my $race;
my $sex;
my $movetype;
my $pp = 0;
my $damage = 0;
my $accuracy = 0;
my $priority = 0;
my $desc;
my @stats = [0,0,0,0,0,0];
my @moves;
my @type;
my @abilities;

# chomp data
foreach $line (<STREAM>) {
	if($type eq 'pony') {
		if($line =~ /name = \"([A-Za-z\s']+)\"/) {
			$name = $1;

		} elsif($line =~ /type\[[0-1]\] = Type\.([A-Z]+)/) {
			push(@type, $1);

		} elsif($line =~ /race = Race\.([A-Z]+)/) {
			$race = $1;
			
		} elsif($line =~ /sex = Sex\.([MF]).+/) {
			$sex = $1;

		} elsif($line =~ /base(Hp|Atk|Def|Spatk|Spdef|Speed) = ([0-9]+)/) {
			if($1 eq 'Hp') {
				$stats[0] = $2;
			} elsif($1 eq 'Atk') {
				$stats[1] = $2;
			} elsif($1 eq 'Def') {
				$stats[2] = $2;
			} elsif($1 eq 'Spatk') {
				$stats[3] = $2;
			} elsif($1 eq 'Spdef') {
				$stats[4] = $2;
			} elsif($1 eq 'Speed') {
				$stats[5] = $2;
			}

		} elsif($line =~ /learnableMoves\.put\("([A-Za-z\s'\-]+)\"/) {
			push(@moves, $1);

		} elsif($line =~ /possibleAbilities\[[0-9]+\] = \"([A-Za-z\s'\-]+)\"/) {
			push(@abilities, $1);
		}
	} elsif($type eq 'move') {
		if($line =~ /super\(\"([A-Za-z\s'\-]+)\"\)/) {
			$name = $1;

		} elsif($line =~ /type = Type\.([A-Z]+)/) {
			push(@type, $1);

		} elsif($line =~ /moveType = Move\.MoveType\.([A-Z]+)/) {
			$movetype = $1;

		} elsif($line =~ /maxpp = pp = (-?[0-9]+)/) {
			$pp = $1;
			
		} elsif($line =~ /baseDamage = ([0-9]+)/) {
			$damage = $1;

		} elsif($line =~ /accuracy = (-?[0-9]+)/) {
			$accuracy = $1;

		} elsif($line =~ /priority = (-?[0-9]+)/) {
			$priority = $1;

		} elsif($line =~ /briefDesc = "(.*)"/) {
			$desc = $1;
		}
	} elsif($type eq 'item' or $type eq 'ability') {
		if($line =~ /super\(\"([A-Za-z\s']+)\"\)/) {
			$name = $1;
		} elsif($line =~ /briefDesc = "(.*)"/) {
			$desc = $1;
		}
	}

}
close(STREAM);

die unless length($name) > 0;

if($type eq 'pony') {
	# emit JS code for a single pony
	print 
	"		'",lc($name =~ s/[\s'\-]//gr),"': {
			num: $num,
			name: \"$name\",
			type: [ '",$type[0],(scalar @type > 1 ? "', '".$type[1] : ""), "' ],
			race: '",lc($race),"',
			sex: '$sex',
			img: '",($name =~ s/[\s'\-]//gr),"/stand_right.",($nogif == 1 ? 'png' : 'gif'),"',
			stats: {
				hp:  $stats[0],
				atk: $stats[1],
				def: $stats[2],
				spa: $stats[3],
				spd: $stats[4],
				spe: $stats[5]
			},
			moves: [ ";
	my $i;
	for ($i = 0; $i < scalar @moves - 1; ++$i) {
		print "'",lc($moves[$i] =~ s/[\s'\-]//gr),"', ";
	}
	print "'",lc($moves[$i] =~ s/[\s'\-]//gr),"' ],
			abilities: [ ";

	for ($i = 0; $i < scalar @abilities - 1; ++$i) {
		print "'",lc($abilities[$i] =~ s/[\s']//gr),"', ";
	}
	print "'",lc($abilities[$i] =~ s/[\s'\-]//gr),"' ]
		},\n";
} elsif($type eq 'move') {
	print
	"		'",lc($name =~ s/[\s'\-]//gr),"': {
			name: \"$name\",
			type: '$type[0]',
			movetype: '$movetype',
			pp: $pp,
			damage: $damage,
			accuracy: $accuracy,
			prority: $priority,
			description: \"$desc\"
		},\n";
} elsif($type eq 'item' or $type eq 'ability') {
	print
	"		'",lc($name =~ s/[\s'\-]//gr),"': {
			name: \"$name\",
			description: \"$desc\"
		},\n";
}
