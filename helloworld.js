export default {

    functionone(a,b) {
        return a*b;
    },

    functiontwo(c, d) {
        return c/d;
    },

    functionthree(e,f) {
        return e+f;
    },

    render() {
        return <div className='test'>
            {this.functionone()}
            {this.functionthree()}
            {this.functiontwo()}
        </div>;
    }
}