#!/bin/bash
# USAGE: updatePresets.sh PATH_TO_CSV
# This script will run the code to generate new presets and write them to the presets file for use in iD
# If no CSV File is specified, it will return an error
CSV_File=$1

if [ -z "$CSV_File" ];
then
  echo ERROR: You Must Specify a CSV file 1>&2
  echo "USAGE: updatePresets.sh PATH_TO_CSV"
  exit 1 # terminate and indicate error
else
  rm -r ./data/presets/
  node ./tools/buildFromCSV.js $CSV_File
  cd ./tools
  node ./compileId.js > ../npmapPresets.js
  cd ..
fi
