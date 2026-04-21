#!/usr/bin/env -S just --justfile

alias d := dev
alias b := build

[doc('List available commands')]
_default:
    just --list --unsorted

[doc('Setup the project')]
setup: _hooks
    pnpm install

[doc('Setup Git hooks')]
_hooks:
    #!/usr/bin/env bash

[doc('Publish the binaries')]
deploy:
    yaak plugin publish

[doc('Exhaustive quality check')]
qqq: qa meta

[doc('Quality check')]
qq: qa

[doc('Quick quality check')]
qa: fmt-check lint

[doc('Fix before check')]
qc: qq

[doc('Dev')]
dev:
    yaak plugin dev

[doc('Build')]
build:
    yaak plugin build

[doc('Format')]
fmt:

[doc('Check formatting')]
fmt-check:

[doc('Lint')]
lint: fmt-check

[doc('Dependency analysis')]
meta:
