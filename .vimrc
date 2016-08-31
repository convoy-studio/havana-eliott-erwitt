sy on
set modeline
set backspace=indent,eol,start
set ts=4
set sw=4
set sts=4
set noet
set nowrap
set ruler
set smartindent
set wildmode=longest,list
set wildmenu
set incsearch

set cursorline
hi CursorLine term=bold cterm=bold guibg=Grey40

" tweak tabstop and shiftwidth values by language
au FileType javascript setlocal ts=2 sw=2 sts=2 noet
au FileType css setlocal ts=2 sw=2 sts=2 noet
au FileType html setlocal ts=2 sw=2 sts=2 noet
au FileType yaml setlocal ts=2 sw=2 sts=2 noet
au FileType sql setlocal ts=2 sw=2 sts=2 noet
