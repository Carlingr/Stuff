#this file was built to generate images from captions created
#in a text file. It requires imagemagic and must be run in the
#same directory as a text file containing the captions, which
#must be named captions.txt. It will generate all the captions
#as PNG files in a subdirectory of the directory it is run in
#called captions

sed '/^[[:space:]]*$/d'  captions.txt > captions.tmp #load captions without blank space baby
mkdir captions #make the folder
length=`wc -l captions.tmp | cut -f1 -d" "` #how long is the file?
###^this goes here so the loop starts^
while [[ $length -ge 1 ]]; do #While we still have things left in the file
  line=`head -n 1 captions.tmp` #what's the first line rn
  tail -n +2 captions.tmp > tailed.tmp #grab the first line
  mv tailed.tmp captions.tmp #it likes it better when you do this
  length=`wc -l captions.tmp | cut -f1 -d" "` #how long is the file
  ((iterations++)) #keep an eye on where we are
  echo $iterations #where are we?
  convert -background transparent -fill black -font KG-All-Of-Me -pointsize 46 -gravity Center -size 1280x caption:"$line" captions/$iterations.png #This is the meat of the script. See Imagemagik docs.
done
rm captions.tmp #clean this mess up!
