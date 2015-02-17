---
title:      "Alias Everything"
layout:     post
subtitle:   "Type less, do more"
date:       2015-01-18 12:00:00
author:     "Jon"
---
*This post is part of an ongoing series based a talk I gave called [Command and Conquer]({% post_url 2015-01-15-command-and-conquer %}) for the [Dayton Web Developers](http://www.meetup.com/dayton-web-developers/events/219096888/) group.*

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

#### Letters to the editor
As developers, we spend a lot of time editing files (when we're not [arguing about the best editor](https://xkcd.com/378/), that is). We can use an alias for that as well:

<pre><code>alias edit='$EDITOR'
</code></pre>

You'll notice something special here. ```$EDITOR``` refers to a special [environment variable](https://wiki.archlinux.org/index.php/environment_variables) that tells bash which editor to use as the default. Here are a few examples of how to set it:
<pre><code>export EDITOR='vim'
export EDITOR='emacs'
export EDITOR='atom'
</code></pre>

Now I can run ```edit``` to open my preferred editor inside my working directory, or ```edit file_name.txt``` to open a specific file.

<!-- #### Other examples
Hopefully you're beginning to see the usefulness of aliases. To see a lot more cool aliases, take a look at my [alias file](https://github.com/jonoliver/dotfiles/blob/master/custom/alias.zsh). For now, here are a few random favorites:
 -->

#### Jogging your memory
Aliases are great for productivity, but sometimes we may forget what the alias actually does behind the scenes. This is no good. We want our aliases to be *conveniences*, not *abstractions*. Luckily, we can use an alias to help us with this as well:

<pre><code># search aliases for pattern
alias ag='alias | grep'
</code></pre>

This combines the power of the [vertical pipe](http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO-4.html) with the searching power of [grep](http://unixhelp.ed.ac.uk/CGI/man-cgi?grep). Now we can run something like ```ag git``` to give us a nice filtered list of all of our aliases that use git. Wonderful.

<!-- <pre><code>
# search processes for pattern
alias psg='ps -ef | grep'
# search history for pattern
alias hg='history | grep'
</code></pre> -->


#### More goodness to come
I'll be updating this posts with some more useful aliases, but it's creeping into the wee hours of the morning now, time to hit the sack. Until then, have a look at my complete [alias file](https://github.com/jonoliver/dotfiles/blob/master/custom/alias.zsh) over on GitHub. For now, I'll leave you with a few handy aliases for showing/hiding hidden files in the mac finder.

<pre><code>
# Mac finder
# show hidden files in finder
alias sf="defaults write com.apple.finder AppleShowAllFiles TRUE; killall Finder"

# hide hidden files in finder
alias hf="defaults write com.apple.finder AppleShowAllFiles FALSE; killall Finder"
</code></pre>

Thanks for reading!
