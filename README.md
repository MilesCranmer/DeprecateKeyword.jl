<div align="center">

[![Dev](https://img.shields.io/badge/docs-dev-blue.svg)](https://astroautomata.com/DeprecateKeywords.jl/dev/)
[![Build Status](https://github.com/MilesCranmer/DeprecateKeywords.jl/actions/workflows/CI.yml/badge.svg?branch=master)](https://github.com/MilesCranmer/DeprecateKeywords.jl/actions/workflows/CI.yml?query=branch%3Amain)
[![Coverage](https://coveralls.io/repos/github/MilesCranmer/DeprecateKeywords.jl/badge.svg?branch=master)](https://coveralls.io/github/MilesCranmer/DeprecateKeywords.jl?branch=master)

</div>
  
DeprecateKeywords defines a macro for keyword deprecation:

```julia
using DeprecateKeywords

@deprecate_kws (a=b, c=d) function f(;a=2, c=3)
    a + c
end
```

With this, we can use both the old and new keywords.
If using the old keyword, it will automatically be passed to the new keyword, but with a deprecation warning.

```julia
julia> f(a=1, c=2)
3

julia> f(b=1, c=2)
┌ Warning: Keyword argument `b` is deprecated. Use `a` instead.
│   caller = top-level scope at REPL[5]:1
└ @ Core REPL[5]:1
3
```

(The warning uses `depwarn`, so is only visible if one starts with `--depwarn=yes`)
