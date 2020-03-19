length=`wc -l filenames.txt | cut -f1 -d" "` #how long is the file?
###^this goes here so the loop starts^
while [[ $length -ge 1 ]]; do

  old=`head -n 1 filenames.txt` #what's the first line of the original filenames rn
  echo "$old"

  new=`head -n 1 filenames_mod.txt` #what's the first line of the new filenames rn
  echo "$new"

  if [ "$old" != "$new" ]; then
    mv "$old" "$new"
    echo "moved"
  fi
  tail -n +2 filenames.txt > filenames.txt.tmp #remove the first line of the old filenames file
  tail -n +2 filenames_mod.txt > filenames_mod.txt.tmp #remove the first line of the new filenames file
mv filenames.txt.tmp filenames.txt #put it back!
mv filenames_mod.txt.tmp filenames_mod.txt #this one too!
#the last 4 lines are 4 lines and not 2 because when I tried writing directly linux got pissy.
  length=`wc -l filenames.txt | cut -f1 -d" "` #how long is the file
  ((iterations++))
  echo $iterations
done
