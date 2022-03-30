import './Footer1.css';

const Foo = () => {
    return(
        <div className="foo">
        <div class="col-4 offset-1">
                        <form>
                        <h5>Subscribe to our newsletter</h5>
                        <p>Monthly digest of whats new and exciting from us.</p>
                        <div class="d-flex w-100 gap-2">
                            <label for="newsletter1" class="visually-hidden">Email address</label>
                            <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
                            <button class="btn btn-primary" type="button">Subscribe</button>
                        </div>
                        </form>
        </div>
        </div>
    );
}

export default Foo;