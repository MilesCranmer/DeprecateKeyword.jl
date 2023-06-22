# Usage

## Types

```@docs
Quantity
Dimensions
```

## Utilities

The two main general utilities for working
with quantities are `ustrip` and `dimension`:

```@docs
ustrip
dimension
```

### Accessing dimensions

Utility functions to extract specific dimensions are as follows:

```@docs
ulength
umass
utime
ucurrent
utemperature
uluminosity
uamount
```

```@autodocs
Modules = [DeprecateKeyword]
Pages   = ["utils.jl"]
Filter  = t -> !(t in [ustrip, dimension, ulength, umass, utime, ucurrent, utemperature, uluminosity, uamount])
```

## Units

The two main functions for working with units are `uparse` and `u_str`:

```@docs
@u_str
uparse
```

### Available units

The base SI units are as follows.
Instead of calling directly, it is recommended to access them via
the `@u_str` macro, which evaluates the expression
in a namespace with all the units available.

```@docs
Units.m
Units.g
Units.s
Units.A
Units.K
Units.cd
Units.mol
```

Several derived SI units are available as well:

```@docs
Units.Hz
Units.N
Units.Pa
Units.J
Units.W
Units.C
Units.V
Units.F
Units.Ω
Units.T
Units.L
Units.bar
```

## Internals

### FixedRational

```@docs
DeprecateKeyword.FixedRational
DeprecateKeyword.denom
```

