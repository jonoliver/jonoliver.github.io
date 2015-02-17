---
title: "Command line extras"
layout: post
---
<!-- # How can it help me?
- Faster file system navigation with ```cd```
- Easy file/folder manipulation
- Search files or text with ```grep```
- Manipulate text with awk
- Transfer data and files remotely with curl and scp
- Interact with remote machines with ssh
- Automate things with bash scripts
- Schedule scripts with cron -->

# Express yourself with functions
Aliases are great for simple shortcuts, but what if we need to be more expressive? Functions to the rescue!

[Bash functions](http://tldp.org/LDP/abs/html/functions.html) are great for commands that may require more complex logic, multiple arguments or chaining together of multiple commands. For example, the following function is a much more useful version of the ```mkdir``` command.


<pre><code>mkcd() { mkdir -p "$@" && cd "$_"; }
</code></pre>

There are a few things happening here, so let's break it down.


<pre><code>o(){ open ${1:-.} }
</code></pre>

So, where do we store all of these awesome aliases and functions?

# Curating your dotfiles


# Redirect your output
# The power of the pipe

# Packages
- tig

# Oh-my-zsh


# Use the source (control)

# Tmux
