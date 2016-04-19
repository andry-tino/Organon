# Organon
CSS ruleset validation via [Higher Order Logic](https://hol-theorem-prover.org/) ([HOL](https://github.com/HOL-Theorem-Prover/HOL))

# The idea
The objective is being able to run tests against an HTML/CSS codebase in order to validate the final layout via a mathematical proof driven process modelling the W3C CSS standard.

_Organon_ generates a set of HOL theories which represent the hypothesis of a HOL theorem to be proved. The thesis is represented by a HOL statement about final CSS values of properties on elements after they are rendered. The CSS rendering engine will provide actual values, however expected values are produced by the set of theories.

_Organon_ builds the theories based on the CSS codebase.

## Scenarios & applications
Possible scenarios and applications are the following:

- Validating/testing browser/CSS rendering engine behavior. Browser/CSS rendering engine renders elements in the expected way. 
- Validating a website layout. Testing that the styling codebase is well formed.
