---
name: calc
description: 'Evaluate a math expression. e.g. "/calc sqrt(144) + 2^10"'
arguments:
  - name: expression
    description: 'The math expression to evaluate. e.g. "sqrt(144) + 2^10", "sin(pi/4)", "12!"'
    required: true
---

# Calculate

Evaluate the mathematical expression: **$ARGUMENTS**

## Instructions

1. Use the `calculate` tool with:
   - `expression: "$ARGUMENTS"`

2. Present the result clearly

3. If the expression is invalid, explain the error and suggest a corrected version
