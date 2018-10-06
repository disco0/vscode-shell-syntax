module.exports = [
  {
    "option": "bell-style",
    "description": "Controls what happens when Readline wants to ring the terminal bell. If set to `none`, Readline never rings the bell. If set to `visible`, Readline uses a visible bell if one is available. If set to `audible` (the default), Readline attempts to ring the terminal`s bell.",
  },

  {
    "option": "bind-tty-special-chars",
    "description": "If set to `on` (the default), Readline attempts to bind the control characters treated specially by the kernel`s terminal driver to their Readline equivalents.",
  },

  {
    "option": "blink-matching-paren",
    "description": "If set to `on`, Readline attempts to briefly move the cursor to an opening parenthesis when a closing parenthesis is inserted. The default is `off`.",
  },

  {
    "option": "colored-completion-prefix",
    "description": "If set to `on`, when listing completions, Readline displays the common prefix of the set of possible completions using a different color. The color definitions are taken from the value of the LS_COLORS environment variable. The default is `off`.",
  },

  {
    "option": "colored-stats",
    "description": "If set to `on`, Readline displays possible completions using different colors to indicate their file type. The color definitions are taken from the value of the LS_COLORS environment variable. The default is `off`.",
  },

  {
    "option": "comment-begin",
    "description": "The string to insert at the beginning of the line when the insert-comment command is executed. The default value is "#".",
  },

  {
    "option": "completion-display-width",
    "description": "The number of screen columns used to display possible matches when performing completion. The value is ignored if it is less than 0 or greater than the terminal screen width. A value of 0 will cause matches to be displayed one per line. The default value is -1.",
  },

  {
    "option": "completion-ignore-case",
    "description": "If set to `on`, Readline performs filename matching and completion in a case-insensitive fashion. The default value is `off`.",
  },

  {
    "option": "completion-map-case",
    "description": "If set to `on`, and completion-ignore-case is enabled, Readline treats hyphens (`-`) and underscores (`_`) as equivalent when performing case-insensitive filename matching and completion.",
  },

  {
    "option": "completion-prefix-display-length",
    "description": "The length in characters of the common prefix of a list of possible completions that is displayed without modification. When set to a value greater than zero, common prefixes longer than this value are replaced with an ellipsis when displaying possible completions.",
  },

  {
    "option": "completion-query-items",
    "description": "The number of possible completions that determines when the user is asked whether the list of possibilities should be displayed. If the number of possible completions is greater than this value, Readline will ask the user whether or not he wishes to view them; otherwise, they are simply listed. This variable must be set to an integer value greater than or equal to 0. A negative value means Readline should never ask. The default limit is 100.",
  },

  {
    "option": "convert-meta",
    "description": "If set to `on`, Readline will convert characters with the eighth bit set to an ASCII key sequence by stripping the eighth bit and prefixing an ESC character, converting them to a meta-prefixed key sequence. The default value is `on`, but will be set to `off` if the locale is one that contains eight-bit characters.",
  },

  {
    "option": "disable-completion",
    "description": "If set to `On`, Readline will inhibit word completion. Completion characters will be inserted into the line as if they had been mapped to self-insert. The default is `off`.",
  },

  {
    "option": "echo-control-characters",
    "description": "When set to `on`, on operating systems that indicate they support it, readline echoes a character corresponding to a signal generated from the keyboard. The default is `on`.",
  },

  {
    "option": "editing-mode",
    "description": "The editing-mode variable controls which default set of key bindings is used. By default, Readline starts up in Emacs editing mode, where the keystrokes are most similar to Emacs. This variable can be set to either `emacs` or `vi`.",
  },

  {
    "option": "emacs-mode-string",
    "description": "This string is displayed immediately before the last line of the primary prompt when emacs editing mode is active. The value is expanded like a key binding, so the standard set of meta and control prefixes and backslash escape sequences is available. Use the `\1` and `\2` escapes to begin and end sequences of non-printing characters, which can be used to embed a terminal control sequence into the mode string. The default is `@`.",
  },

  {
    "option": "enable-bracketed-paste",
    "description": "When set to `On`, Readline will configure the terminal in a way that will enable it to insert each paste into the editing buffer as a single string of characters, instead of treating each character as if it had been read from the keyboard. This can prevent pasted characters from being interpreted as editing commands. The default is `off`.",
  },

  {
    "option": "enable-keypad",
    "description": "When set to `on`, Readline will try to enable the application keypad when it is called. Some systems need this to enable the arrow keys. The default is `off`.",
  },

  {
    "option": "enable-meta-key",
    "description": "When set to `on`, Readline will try to enable any meta modifier key the terminal claims to support when it is called. On many terminals, the meta key is used to send eight-bit characters. The default is `on`.",
  },

  {
    "option": "expand-tilde",
    "description": "If set to `on`, tilde expansion is performed when Readline attempts word completion. The default is `off`.",
  },

  {
    "option": "history-preserve-point",
    "description": "If set to `on`, the history code attempts to place the point (the current cursor position) at the same location on each history line retrieved with previous-history or next-history. The default is `off`.",
  },

  {
    "option": "history-size",
    "description": "Set the maximum number of history entries saved in the history list. If set to zero, any existing history entries are deleted and no new entries are saved. If set to a value less than zero, the number of history entries is not limited. By default, the number of history entries is not limited. If an attempt is made to set history-size to a non-numeric value, the maximum number of history entries will be set to 500.",
  },

  {
    "option": "horizontal-scroll-mode",
    "description": "This variable can be set to either `on` or `off`. Setting it to `on` means that the text of the lines being edited will scroll horizontally on a single screen line when they are longer than the width of the screen, instead of wrapping onto a new screen line. By default, this variable is set to `off`.",
  },

  {
    "option": "input-meta",
    "description": "If set to `on`, Readline will enable eight-bit input (it will not clear the eighth bit in the characters it reads), regardless of what the terminal claims it can support. The default value is `off`, but Readline will set it to `on` if the locale contains eight-bit characters. The name meta-flag is a synonym for this variable.",
  },

  {
    "option": "isearch-terminators",
    "description": "The string of characters that should terminate an incremental search without subsequently executing the character as a command (see Searching). If this variable has not been given a value, the characters ESC and C-J will terminate an incremental search.",
  },

  {
    "option": "keymap",
    "description": "Sets Readline`s idea of the current keymap for key binding commands. Acceptable keymap names are emacs, emacs-standard, emacs-meta, emacs-ctlx, vi, vi-move, vi-command, and vi-insert. vi is equivalent to vi-command (vi-move is also a synonym); emacs is equivalent to emacs-standard. The default value is emacs. The value of the editing-mode variable also affects the default keymap.",
  },

  {
    "option": "keyseq-timeout",
    "description": "Specifies the duration Readline will wait for a character when reading an ambiguous key sequence (one that can form a complete key sequence using the input read so far, or can take additional input to complete a longer key sequence). If no input is received within the timeout, Readline will use the shorter but complete key sequence. Readline uses this value to determine whether or not input is available on the current input source (rl_instream by default). The value is specified in milliseconds, so a value of 1000 means that Readline will wait one second for additional input. If this variable is set to a value less than or equal to zero, or to a non-numeric value, Readline will wait until another key is pressed to decide which key sequence to complete. The default value is 500.",
  },

  {
    "option": "mark-directories",
    "description": "If set to `on`, completed directory names have a slash appended. The default is `on`.",
  },

  {
    "option": "mark-modified-lines",
    "description": "This variable, when set to `on`, causes Readline to display an asterisk (`*`) at the start of history lines which have been modified. This variable is `off` by default.",
  },

  {
    "option": "mark-symlinked-directories",
    "description": "If set to `on`, completed names which are symbolic links to directories have a slash appended (subject to the value of mark-directories). The default is `off`.",
  },

  {
    "option": "match-hidden-files",
    "description": "This variable, when set to `on`, causes Readline to match files whose names begin with a `.` (hidden files) when performing filename completion. If set to `off`, the leading `.` must be supplied by the user in the filename to be completed. This variable is `on` by default.",
  },

  {
    "option": "menu-complete-display-prefix",
    "description": "If set to `on`, menu completion displays the common prefix of the list of possible completions (which may be empty) before cycling through the list. The default is `off`.",
  },

  {
    "option": "output-meta",
    "description": "If set to `on`, Readline will display characters with the eighth bit set directly rather than as a meta-prefixed escape sequence. The default is `off`, but Readline will set it to `on` if the locale contains eight-bit characters.",
  },

  {
    "option": "page-completions",
    "description": "If set to `on`, Readline uses an internal more-like pager to display a screenful of possible completions at a time. This variable is `on` by default.",
  },

  {
    "option": "print-completions-horizontally",
    "description": "If set to `on`, Readline will display completions with matches sorted horizontally in alphabetical order, rather than down the screen. The default is `off`.",
  },

  {
    "option": "revert-all-at-newline",
    "description": "If set to `on`, Readline will undo all changes to history lines before returning when accept-line is executed. By default, history lines may be modified and retain individual undo lists across calls to readline. The default is `off`.",
  },

  {
    "option": "show-all-if-ambiguous",
    "description": "This alters the default behavior of the completion functions. If set to `on`, words which have more than one possible completion cause the matches to be listed immediately instead of ringing the bell. The default value is `off`.",
  },

  {
    "option": "show-all-if-unmodified",
    "description": "This alters the default behavior of the completion functions in a fashion similar to show-all-if-ambiguous. If set to `on`, words which have more than one possible completion without any possible partial completion (the possible completions don't share a common prefix) cause the matches to be listed immediately instead of ringing the bell. The default value is `off`.",
  },

  {
    "option": "show-mode-in-prompt",
    "description": "If set to `on`, add a character to the beginning of the prompt indicating the editing mode: emacs, vi command, or vi insertion. The mode strings are user-settable. The default value is `off`.",
  },

  {
    "option": "skip-completed-text",
    "description": "If set to `on`, this alters the default completion behavior when inserting a single match into the line. It's only active when performing completion in the middle of a word. If enabled, readline does not insert characters from the completion that match characters after point in the word being completed, so portions of the word following the cursor are not duplicated. For instance, if this is enabled, attempting completion when the cursor is after the `e` in `Makefile` will result in `Makefile` rather than `Makefilefile`, assuming there is a single possible completion. The default value is `off`.",
  },

  {
    "option": "vi-cmd-mode-string",
    "description": "This string is displayed immediately before the last line of the primary prompt when vi editing mode is active and in command mode. The value is expanded like a key binding, so the standard set of meta- and control prefixes and backslash escape sequences is available. Use the `\1` and `\2` escapes to begin and end sequences of non-printing characters, which can be used to embed a terminal control sequence into the mode string. The default is `(cmd)`.",
  },

  {
    "option": "vi-ins-mode-string",
    "description": "This string is displayed immediately before the last line of the primary prompt when vi editing mode is active and in insertion mode. The value is expanded like a key binding, so the standard set of meta- and control prefixes and backslash escape sequences is available. Use the `\1` and `\2` escapes to begin and end sequences of non-printing characters, which can be used to embed a terminal control sequence into the mode string. The default is `(ins)`.",
  },

  {
    "option": "visible-stats",
    "description": "If set to `on`, a character denoting a file's type is appended to the filename when listing possible completions. The default is `off`.",
  },
]
