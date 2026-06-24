# Contributing to ProcureFlow ERP

First off, thank you for considering contributing to ProcureFlow ERP! It's people like you that make this tool great.

## Git Commit Message Format

We follow the Conventional Commits specification. This leads to more readable messages that are easy to follow when looking through the project history.

Each commit message consists of a **header**, a **body**, and a **footer**. The header has a special format that includes a **type**, a **scope** (optional), and a **subject**:

```text
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

### Allowed `<type>` values:
- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation

### Example:
```text
feat(vendor): add document upload capability

Added support for vendor document uploads using AWS S3.
Fixes #123
```

## Branch Naming Convention

We use a standard branching strategy to keep our workflow organized. Please use the following prefixes for your branch names:

- `feat/`: For new features (e.g., `feat/vendor-portal`)
- `fix/`: For bug fixes (e.g., `fix/login-crash`)
- `docs/`: For documentation updates (e.g., `docs/readme-update`)
- `chore/`: For maintenance tasks (e.g., `chore/update-deps`)

Use all-lowercase and hyphen-separated words.

## Pull Request Guidelines

1. **Keep it small**: Pull Requests should ideally address a single concern or feature.
2. **Link Issues**: Always link the relevant issue in the PR description using keywords like `Fixes #123` or `Resolves #456`.
3. **Tests**: If you add new functionality, please ensure appropriate tests are added. If you fix a bug, add a test that ensures the bug does not regress.
4. **Lint and Format**: Make sure to run `npm run lint` and `npm run format` locally before pushing. Our CI pipeline will fail if there are linting or formatting errors.
5. **Review Process**: Request a review from at least one core maintainer. Be prepared to discuss and revise your code based on feedback.

Thank you for your contributions!
