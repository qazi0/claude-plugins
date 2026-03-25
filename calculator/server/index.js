import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { create, all } from "mathjs";

const math = create(all);

const server = new McpServer({
  name: "calculator",
  version: "1.0.0",
});

// Tool 1: Evaluate a math expression
server.tool(
  "calculate",
  "Evaluate a mathematical expression with exact precision. Supports arithmetic, algebra, trigonometry, logarithms, factorials, combinations, permutations, complex numbers, matrices, and more. Examples: '2^10 + sqrt(144)', 'sin(pi/4)', '12!', 'combinations(10, 3)', 'det([[1,2],[3,4]])'",
  { expression: z.string().describe("The math expression to evaluate") },
  async ({ expression }) => {
    try {
      const result = math.evaluate(expression);
      const formatted =
        typeof result === "object" && result.entries
          ? math.format(result, { precision: 14 })
          : math.format(result, { precision: 14 });
      return { content: [{ type: "text", text: String(formatted) }] };
    } catch (err) {
      return {
        content: [{ type: "text", text: `Error: ${err.message}` }],
        isError: true,
      };
    }
  }
);

// Tool 2: Unit conversion
server.tool(
  "convert",
  "Convert a value between units. Supports length, mass, time, temperature, volume, area, speed, force, energy, power, pressure, data storage, and more. Examples: convert 100 'celsius' to 'fahrenheit', 5 'miles' to 'km', 1024 'bytes' to 'kB'",
  {
    value: z.number().describe("The numeric value to convert"),
    from_unit: z.string().describe("Source unit (e.g. 'celsius', 'miles', 'kg')"),
    to_unit: z.string().describe("Target unit (e.g. 'fahrenheit', 'km', 'lb')"),
  },
  async ({ value, from_unit, to_unit }) => {
    try {
      const result = math.unit(value, from_unit).to(to_unit);
      const num = result.toNumber(to_unit);
      return {
        content: [
          {
            type: "text",
            text: `${value} ${from_unit} = ${math.format(num, { precision: 14 })} ${to_unit}`,
          },
        ],
      };
    } catch (err) {
      return {
        content: [{ type: "text", text: `Error: ${err.message}` }],
        isError: true,
      };
    }
  }
);

// Tool 3: Descriptive statistics
server.tool(
  "statistics",
  "Compute descriptive statistics for a list of numbers. Returns count, sum, mean, median, min, max, standard deviation, and variance.",
  {
    numbers: z
      .array(z.number())
      .min(1)
      .describe("Array of numbers to analyze"),
  },
  async ({ numbers }) => {
    try {
      const sorted = [...numbers].sort((a, b) => a - b);
      const count = numbers.length;
      const sum = math.sum(numbers);
      const mean = math.mean(numbers);
      const median = math.median(numbers);
      const min = math.min(numbers);
      const max = math.max(numbers);
      const std = count > 1 ? math.std(numbers) : 0;
      const variance = count > 1 ? math.variance(numbers) : 0;

      const result = {
        count,
        sum,
        mean,
        median,
        min,
        max,
        std_deviation: std,
        variance,
        range: max - min,
      };

      return {
        content: [
          {
            type: "text",
            text: Object.entries(result)
              .map(([k, v]) => `${k}: ${math.format(v, { precision: 14 })}`)
              .join("\n"),
          },
        ],
      };
    } catch (err) {
      return {
        content: [{ type: "text", text: `Error: ${err.message}` }],
        isError: true,
      };
    }
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);
