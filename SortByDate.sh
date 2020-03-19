#This file will sort files where the filename starts with a date in YYYYMM
#format.

yearlcl=18 #what year do you want to start in?
while [ $yearlcl -lt 21 ]; do
  monthlcl=1
  while [ $monthlcl -lt 10 ]; do
    mv "20"$yearlcl"0"$monthlcl* "20"$yearlcl"/0"$monthlcl*
    ((monthlcl++))
  done
  while [ $monthlcl -le 12 ]; do
    mv "20"$yearlcl$monthlcl* "20"$yearlcl"/"$monthlcl*
    ((monthlcl++))
  done
  ((yearlcl++))
done
