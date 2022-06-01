# The Braidjs Monorepo

By versioning our code together, it becomes easier to interoperate.

  - Each top-level folder is a project.  Add yours!
  - Now you can make breaking changes (like a protocol change), without
    actually *breaking* anything—upgrade all the relevant code, across
    multiple projects, at once!

This is not my code.  This is *our* code.

## License

> toomim commented 28 minutes ago
> 
> Go for it. You have permission to remix any of them into an MIT licensed project.

https://github.com/braid-org/braidjs/issues/19


### Projects

Add yours today!

 - `antimatter`: [An implementation of the Antimatter Algorithm](https://github.com/braid-org/braidjs/tree/master/antimatter)
 - `braidify`: [A reference implementation of the Braid Protocol](https://github.com/braid-org/braidjs/tree/master/braidify)
 - `kernel`: [A prototype Braid Kernel](https://github.com/braid-org/braidjs/tree/master/kernel)
 - `sync9`: [A CRDT that supports pruning history](https://github.com/braid-org/braidjs/tree/master/sync9)
 - `util`: [A set of common utilities](https://github.com/braid-org/braidjs/tree/master/util)

Read more about braid at https://braid.org!

### Faq

Q. Wait... can a single repo support multiple NPM packages?

  - A. Yep!  Just create a `package.json` in your project's root folder, and
    then run `npm publish` from it.
