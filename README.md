https://jonoliver.github.io/

pandoc -s -o resume.pdf _site/resume/index.html -V geometry:margin=1in
pandoc -s -o resume.docx _site/resume/index.html -V geometry:margin=1in
