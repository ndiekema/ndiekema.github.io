# Makefile git add commit push github All in One command
# Usage: make git m="commit message"
git:
	git add . 
	git commit -m "$m" 
	git push -u origin main 