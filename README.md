# Survey Tally Board

Count nonblank single-choice answers and show each share of responses.

## Run

Use Node.js 20+. Run `node cli.mjs example.txt`, or pipe UTF-8 text into `node cli.mjs -`. Redirect stdout to keep the result. Other Node.js projects can import `transform` from `./transform.mjs`.

## Example

One answer per line, case-sensitive. The bundled sample produces output including:

```text
Yes · 2 · 66.7%
```

## Limitations

Input is processed in memory. Use the format shown in the example file.

## Development

See [CONTRIBUTING.md](CONTRIBUTING.md) for checks and [CHANGELOG.md](CHANGELOG.md) for changes.

## License

[MIT License](LICENSE). Copyright (c) 2026 survey-tally-board contributors.
