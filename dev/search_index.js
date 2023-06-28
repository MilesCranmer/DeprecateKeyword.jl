var documenterSearchIndex = {"docs":
[{"location":"api/#Usage","page":"API","title":"Usage","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"@depkws","category":"page"},{"location":"api/#DeprecateKeywords.@depkws","page":"API","title":"DeprecateKeywords.@depkws","text":"@depkws def\n\nMacro to deprecate keyword arguments. Use by wrapping a function signature, while using @deprecate(old_kw, new_kw) within the function signature to deprecate.\n\nExamples\n\n@depkws function f(; a=2, @deprecate(b, a))\n    a\nend\n\n\n\n\n\n","category":"macro"},{"location":"#DeprecateKeywords.jl","page":"Home","title":"DeprecateKeywords.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"(Image: Dev) (Image: Build Status) (Image: Coverage)","category":"page"},{"location":"","page":"Home","title":"Home","text":"DeprecateKeywords.jl is a tiny package (77 lines) which defines a macro for keyword deprecation. ","category":"page"},{"location":"","page":"Home","title":"Home","text":"While normally you can use Base.@deprecate for deprecating functions and arguments, because multiple dispatch does not apply to keywords, you actually need a separate macro for using at the original function signature.","category":"page"},{"location":"","page":"Home","title":"Home","text":"For example, let's say we wish to deprecate the keyword old_kw1 in favor of new_kw1, and and old_kw2 in favor of new_kw2:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using DeprecateKeywords\n\n@depkws function foo(; new_kw1=2, new_kw2=3,\n                       @deprecate(old_kw1, new_kw1),\n                       @deprecate(old_kw2, new_kw2))\n    return new_kw1 + new_kw2\nend","category":"page"},{"location":"","page":"Home","title":"Home","text":"The use of normal @deprecate in here is syntactic sugar to help make the signature more intuitive. The @depkws will simply consume the @deprecates and and interpret their contents.","category":"page"},{"location":"","page":"Home","title":"Home","text":"With this, we can use both the old and new keywords. If using the old keyword, it will automatically be passed to the new keyword, but with a deprecation warning.","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> foo(new_kw1=1, new_kw2=2)\n3\n\njulia> foo(old_kw1=1, new_kw2=2)\n┌ Warning: Keyword argument `old_kw1` is deprecated. Use `new_kw1` instead.\n│   caller = top-level scope at REPL[5]:1\n└ @ Core REPL[5]:1\n3","category":"page"},{"location":"","page":"Home","title":"Home","text":"(The warning uses depwarn, so is only visible if one starts with --depwarn=yes)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Here's what this actually gets expanded to:","category":"page"},{"location":"","page":"Home","title":"Home","text":"function foo(; old_kw2 = DeprecatedDefault, old_kw1 = DeprecatedDefault, new_kw1 = begin\n                  if old_kw1 !== DeprecatedDefault\n                      Base.depwarn(\"Keyword argument `old_kw1` is deprecated. Use `new_kw1` instead.\", :foo)\n                      old_kw1\n                  else\n                      2\n                  end\n              end, new_kw2 = begin\n                  if old_kw2 !== DeprecatedDefault\n                      Base.depwarn(\"Keyword argument `old_kw2` is deprecated. Use `new_kw2` instead.\", :foo)\n                      old_kw2\n                  else\n                      3\n                  end\n              end)\n      new_kw1 + new_kw2\n  end","category":"page"},{"location":"#Other-notes/warnings","page":"Home","title":"Other notes/warnings","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"I'm not 100% sure if/when this might prevent Julia from specializing to types, or if it is different from how you would set this up manually. So just be wary of major type inference issues when passing the deprecated keywords.\nThis does not check whether the user passes both keyword arguments. (It might be better to use kws... and then pass through the old keywords within the function body. I didn't do this in my current approach so that the user could still use kws... in the signature if they wish.)\nThis uses the very nice MacroTools.jl package to help make the macro generic.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Contributions very much appreciated. I'm also open to better syntax suggestions!","category":"page"}]
}
