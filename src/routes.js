import React, { Component } from 'react';
import Router, { DefaultRoute, Route, NotFoundRoute, Redirect } from 'react-router';

var routes = (
  <Route name="app" path="/" handler={require('./components/app')}>
    <DefaultRoute handler={require('./components/homePage')} />
    <Route name="serviceSpecs" handler={require('./components/serviceSpecs/serviceSpecPage')} />
    <Route name="addServiceSpec" path="serviceSpec" handler={require('./components/serviceSpecs/manageServiceSpecPage')} />
    <Route name="apiLocation" path="apiLocation" handler={require('./components/apiLocation/manageapiLocationPage')} />
    <Route name="manageServiceSpec" path="serviceSpec/:id" handler={require('./components/serviceSpecs/manageServiceSpecPage')} />
    <Route name="about" handler={require('./components/about/aboutPage')} />
    <NotFoundRoute handler={require('./components/notFoundPage')} />
    <Redirect from="about-us" to="about" />
    <Redirect from="about/*" to="about" />
  </Route>
);

module.exports = routes;