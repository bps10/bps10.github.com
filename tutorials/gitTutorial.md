#Git

##Introduction 
***
Git is very powerful but we typically only use a simple workflow.
This wiki covers that workflow and some tips & tricks that you will frequently need.
Advanced git users should feel free to do whatever they want, this is targeted at git newbies.

## Implement a feature
***
Your should start out with three repositories: origin, development, and personal.
The origin is something like http://github.com/wavii/website/ wavii/website on Github - it is the main repo for the project.

The development repo is a "git clone" of the origin repo on the developer's personal machine.
The personal repo is a Github fork of the origin repo, like [personal](http://github.com/spikegronim/website spikegronim/website).

## Start work 


	git checkout master            # start on the master branch
	git pull origin master          # get up to date with everybody else
	git checkout -b feature       # start the feature branch

## Work on a feature

	... modify files ... 
	git add newfile                   # register a new file with git
	git commit -a                     # check in all modified files
	git push $USER feature       # make a backup of your work in your personal repo
	git push origin $USER/feature # or, back up to origin in a branch prefixed w/your user if you don't 	want a personal repo

## Get a CR
***

	git rebase -i HEAD~5      # optional - squash your work in progress commits into cleaner 	commits 	for review
	git checkout master         # get ready to update from origin
	git pull origin master       # pull latest changes from origin
	git checkout feature         # switch back to your feature branch
	git merge master             # apply updates from origin
	git push $USER feature    # apply your latest changes to your personal repo
	git push origin $USER/feature # or, back up to origin in a branch prefixed w/your user if you don't 	want a personal repo

Then navigate to http://github.com/$USER/$REPO/pull/new/feature to create a pull request.

## Manually merge a completed feature
***

Usually you click the "merge automatically" button in github, but this is equivalent:
	
	git checkout master       # get ready to update from origin
	git pull origin master     # apply any updates from others
	git merge feature           # apply your feature
	git push origin master   # update the origin with your feature
	
	= Tips & tricks =
	
	git commit modifiedfile      # check in one file
	git diff master                    # check the diff btwn yourself and master
	git diff master -- file          # diff only "file" against master
	git rebase -i HEAD~5          # manually mess with the most recent 5 commits
	git push -f $USER feature   # force the $USER repo to accept an update (often needed if you messed with things via rebase -i)
	git reset HEAD                    # undo all modifications, revert to last checkin
	git reset HEAD^1 --hard    # permanently destroy the most recent commit
	git checkout -f file              # reset contents of file to most recent commit (like reset)

## Customizing your .gitconfig

## Configure your editor (defaults to vi)
	[color] 
	ui = auto

	[core]
	editor = emacs       

	# git log -- Extremely beautiful "git log" replacement
	# git hist -- Alternative beautiful "git log" replacement 
	# git panic -- Saves all files to ../git_panic.tar (you will know when you need this=)
	# git wip -- Temporarily commit all files in Work in Progress 
	# git unwip -- Uncommit files and restore them to the way they were
	

*Just shortened commands*

	[alias]
	st = status
	co = checkout
	br = branch

## Advanced aliases

	lg = log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative                    

	hist = log --pretty=format:\"%h %ad | %s%d [%an]\" --graph --date=short

	panic = !tar cvf ../git_panic.tar .             

	wip = !"git add -A; git ls-files --deleted -z | xargs -0 git rm; 
			git commit -m \"wip\""

	unwip = !"git log -n 1 | grep -q -c wip && git reset HEAD~1"    


## Customizing .bash_profile for git

	# Change your prompt to display the current git branch
	function git_branch { (echo -n "*"; git branch 2> /dev/null | sed -e '/^[^*]/d') | sed -e 's/\*\* \(.*\)/*\1/'
	}
	PS1="\[\033[35m\]\t\[\033[m\]|\[\033[36m\]\u\[\033[m\]@\[\033[36m\]\h\[\033[m\]|\[\033[32m\]	\$	(git_branch)\[\033[m\]|\[\033[33m\]\w\[\033[m\]$ "

	# ga (short for "git all") -- quick view of Git Branch, Status, and Log views
	alias ga='echo -e "\n------------ Git Branch ------------ \n";git branch;echo -e 	"\n------------ Git Status 	------------ \n";git status;echo -e "\n------------ Git Log 	-------------- \n";git lg | head -n 12'

	# cdg (short for "cd git") -- pretend git checkout acts like cd. Usage: cdg <branch>. This 	will 		change your branch.
	alias cdg='git checkout $@'

