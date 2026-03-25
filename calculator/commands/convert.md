---
name: convert
description: 'Convert between units. e.g. "/convert 100 celsius fahrenheit"'
arguments:
  - name: value
    description: 'The numeric value to convert. e.g. "100"'
    required: true
  - name: from_unit
    description: 'Source unit. e.g. "celsius", "miles", "kg"'
    required: true
  - name: to_unit
    description: 'Target unit. e.g. "fahrenheit", "km", "lb"'
    required: true
---

# Convert Units

Convert **$ARGUMENTS.value $ARGUMENTS.from_unit** to **$ARGUMENTS.to_unit**.

## Instructions

1. Use the `convert` tool with:
   - `value: $ARGUMENTS.value`
   - `from_unit: "$ARGUMENTS.from_unit"`
   - `to_unit: "$ARGUMENTS.to_unit"`

2. Present the result clearly

3. If the conversion fails, explain what went wrong and suggest valid unit names
