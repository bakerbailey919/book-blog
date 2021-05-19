import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import About from './components/About/About';
import PostsCards from './components/Posts/PostsCards';
import PostDetails from './components/Posts/PostDetails';
import SubscribeForm from './components/SubscribeForm/SubscribeForm';

const App = () => {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/subscribe">
            <SubscribeForm />
          </Route>
          <Route path="/posts/:postId">
            <PostDetails />
          </Route>
          <Route path="/posts">
            <PostsCards />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
