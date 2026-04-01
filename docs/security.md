# Frontend Security Notes

## Scope

This project is a static frontend website and does not include backend logic, authentication, or database integration.

## Secret Handling

- Never hardcode tokens, keys, credentials, or private endpoints in frontend code.
- Never expose .env values directly in UI bundles.
- Keep secret-bearing files out of version control.

## Dependency Caution

- Install only required dependencies.
- Review dependency updates before applying major upgrades.
- Run pnpm audit regularly and evaluate findings in context.

## Path Privacy Guidance

- Use only project-internal relative paths.
- Do not include local machine directories in code, docs, comments, tests, or config.
- Avoid writing usernames or system-specific metadata anywhere in source files.

## Safe Link Practices

- Use rel="noopener noreferrer" for external links opened in a new tab.

## Things That Should Never Be Committed

- .env files
- Private certificates
- Local machine dumps
- Tokens and credentials
- IDE secrets or machine-specific config files
