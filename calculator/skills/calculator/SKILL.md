# Calculator Skill

Use the Calculator MCP tools for exact mathematical calculations instead of approximating.

## When to Use Calculator

Use these tools when you need to:
- Evaluate any math expression with exact precision
- Convert between units (length, mass, temperature, data, etc.)
- Compute statistics on a dataset (mean, median, std deviation, etc.)
- Verify a calculation rather than estimating

## Available Tools

### `calculate`
Evaluate any mathematical expression safely using mathjs.

```
expression: "2^10 + sqrt(144)"
```

Supported syntax:
- Arithmetic: `+`, `-`, `*`, `/`, `^`, `%`
- Functions: `sqrt()`, `abs()`, `round()`, `ceil()`, `floor()`, `log()`, `log2()`, `log10()`, `exp()`
- Trigonometry: `sin()`, `cos()`, `tan()`, `asin()`, `acos()`, `atan()`, `atan2()`
- Constants: `pi`, `e`, `phi`, `i` (imaginary)
- Combinatorics: `factorial()`, `combinations()`, `permutations()`
- Matrices: `det()`, `inv()`, `transpose()` with `[[1,2],[3,4]]` syntax
- Complex numbers: `2 + 3i`

### `convert`
Convert a value between units.

```
value: 100
from_unit: "celsius"
to_unit: "fahrenheit"
```

Supported unit categories: length, mass, time, temperature, volume, area, speed, force, energy, power, pressure, data storage, angle, frequency.

### `statistics`
Compute descriptive statistics on a list of numbers.

```
numbers: [4, 8, 15, 16, 23, 42]
```

Returns: count, sum, mean, median, min, max, std_deviation, variance, range.

## Best Practices

1. **Use `calculate` for any math** — don't approximate when you can get the exact answer
2. **Use `convert` for units** — more reliable than doing conversion math manually
3. **Use `statistics` for datasets** — returns all common descriptive stats in one call
