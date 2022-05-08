import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-4'>
            <h2 className='text-center'>Frequently Asked Question (FAQ)</h2>
            <h4 className='text-center'>Top 4 asked Questions and Answers below.</h4> <br/>
            <div className='container'>
            <h5>Q.1 What is the Difference between javascript and nodejs?</h5>
            <p>Ans: javascript is a programming language which is commonly used to run web browsers. on the other hand, nodejs is basically an interpreter or environment for javascript. a major difference between javascript and nodejs is that javascript can be used on search engines like spider monkey for mozilla or V8 engine for google chrome, whereas nodejs supports only the V8 engine i.e. google chrome as an interpreter.</p>
            <h5>Q.2 When should you use nodejs and when should you use mongodb?</h5>
            <p>Ans: nodejs is used on event-driven along with non-blocking servers. the usage of nodejs is found mainly in traditional web-browsing and back-end API service. while mongodb is in use around document-centric data. it is also in usage when we are rapidly prototyping or accommodating data on a massive scale.</p>
            <h5>Q.3 What is the Differences between sql and nosql databases?</h5>
            <p>Ans:  between sql and nosql databases, sql are relational and nosql are non-relational databases. sql databases are vertically scalable, while nosql ones are horizontally scalable. sql databases work better in case of multi-row transanctions, and nosql databases are superior in case of unstructured data like documents or json. examples of sql databases are oracle and mysql, examples of nosql databases are mongodb and cassandra.</p>
            <h5>Q.4 What is the purpose of jwt and how does it work?</h5>
            <p>Ans: jwt, abbreviation for json web token, is an open standard which can be used to share security information between a client and a server. jwts are signed using a cryptographic algorithm such that, the certain claim cannot be tampered with once the jwt is issued. every jwt contains some encodes json objects, which includes these claims for the mentioned purpose.</p>
            </div>
        
        </div>
    );
};

export default Blogs;