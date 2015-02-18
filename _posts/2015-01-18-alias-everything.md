---
title:      "Alias Everything"
layout:     post
subtitle:   "Type less, do more"
date:       2015-01-18 12:00:00
author:     "Jon"
---
*This post is part of an ongoing series based on a talk I gave called [Command and Conquer]({% post_url 2015-01-15-command-and-conquer %}) for the [Dayton Web Developers](http://www.meetup.com/dayton-web-developers/events/219096888/) group.*

# Alias everything

As developers, we're very concerned with productivity, and aliases are great for that. Aliases are simply shortcuts that we can define for commonly used commands.

#### Take me to your dir
Let's say I have a directory that I find myself navigating to frequently:

<pre><code>alias pro='cd ~/Documents/projects'
</code></pre>

Now I can run ```pro``` to automatically navigate to my "projects" directory from any location. Cool!

#### Gimme the details

We can also use aliases to set default flags and save ourselves a lot of typing. For example, we can use ```ls``` to list the contents of a directory, but I'm not a big fan of the default view, so I use this instead:

<pre><code>alias l='ls -lAh'
</code></pre>

Now if I simply run ```l```, I get a long listing of the contents of my current directory, including hidden files, in a more readable format.

#### Letter to the editor
As developers, we spend a lot of time editing files (when we're not [arguing about the best editor](https://xkcd.com/378/), that is). We can use an alias for that as well:

<pre><code>alias edit='$EDITOR'
</code></pre>

You'll notice something special here. ```$EDITOR``` refers to a special [environment variable](https://wiki.archlinux.org/index.php/environment_variables) that tells bash which editor to use as the default. Here are a few examples of how to set it:
<pre><code>export EDITOR='vim'
export EDITOR='emacs'
export EDITOR='atom'
</code></pre>

Now I can run ```edit``` to open my preferred editor inside my working directory, or ```edit file_name.txt``` to open a specific file.

#### Jogging your memory
Aliases are great for productivity, but sometimes we may forget what the alias actually does behind the scenes. This is no good. We want our aliases to be *conveniences*, not *abstractions*. Luckily, we can use an alias to help us with this as well:

<pre><code>alias ag='alias | grep'
</code></pre>

This combines the power of the [vertical pipe](http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO-4.html) with the searching power of [grep](http://unixhelp.ed.ac.uk/CGI/man-cgi?grep). Now we can run something like ```ag git``` to give us a nice filtered list of all of our aliases that use git. But that's not all...

#### Send out the [search party](https://www.youtube.com/watch?v=UUNvFVQYClY)
Although ```grep``` is most commonly used to search for patterns in files, using it to search against the output of different commands is extremely useful as well. Let's take a look at a few other aliases to leverage this technique.

Want to search through a list of running processes?
<pre><code>alias psg='ps -ef | grep'
</code></pre>

How about searching your command history for the syntax of that command you ran months ago?
<pre><code>alias hg='history | grep'
</code></pre>

And that's just the beginning. Basically, if a command has output, you can ```grep``` it!

#### Gittin' stuff done

As good, decent, responsible developers, we're always sure to use [version control](http://git-scm.com/video/what-is-version-control) for our projects. I'm partial to [git](http://git-scm.com/), and my git aliases are a crucial part of my workflow. Here's a sample:
<pre><code># initialize a repo
alias gi='git init'

# view the status
alias gst='git status'

# stage changes
alias ga='git add'

# unstage changes
alias grh='git reset HEAD'

# view unstaged changes
alias gd='git diff'

# view staged changes
alias gdc='git diff --cached'

# commit changes
alias gc='git commit'

# commit changes, with message
alias gcm='git commit -m'

# push to a remote repo
alias gp='git push'

# fetch changes from a remote repo
alias gf='git fetch'

# merge changes
alias gm='git merge'

# check out a branch
alias gco='git checkout'

# list branches
alias gb='git branch'

# view list of commits (and make it look good!)
glog='git log --oneline --decorate --color --graph'
</code></pre>

I find that since I've committed these aliases to muscle memory, not only am I *much* faster, but it has the added benefit of keeping me in my state of flow, allowing me to focus on the task at hand instead of fumbling around on the keyboard. Wins all around!

#### Even more goodness
If you're not already using aliases as part of your every day workflow, hopefully this has compelled you to start. For even more, have a look at my [alias file](https://github.com/jonoliver/dotfiles/blob/master/custom/alias.zsh) over on GitHub.

And remember, this is just a starting point. Feel free to use any of the aliases here (most of them are "borrowed" anyway), but more importantly, create your own! **Make your aliases work for you.**

Ok, that's all for now. I'll leave you with a few handy aliases for displaying hidden files in the mac finder.

<pre><code># show hidden files in finder
alias sf="defaults write com.apple.finder AppleShowAllFiles TRUE; killall Finder"

# hide hidden files in finder
alias hf="defaults write com.apple.finder AppleShowAllFiles FALSE; killall Finder"
</code></pre>

Thanks for reading!
