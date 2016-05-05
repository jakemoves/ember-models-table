import Ember from "ember";

export function dotToDash([value]/*, hash*/) {
    return value.replace('.', '-');
}

export default Ember.Helper.helper(dotToDash);
