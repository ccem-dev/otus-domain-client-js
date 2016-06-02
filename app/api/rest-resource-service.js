(function() {
    'use strict';

    angular
        .module('otusDomainClient')
        .service('RestResourceService', RestResourceService);

    RestResourceService.$inject = ['InstallerResourceFactory', 'AuthenticatorResourceFactory', 'UserResourceFactory', 'RepositoryResourceFactory'];

    function RestResourceService(InstallerResourceFactory, AuthenticatorResourceFactory, UserResourceFactory, RepositoryResourceFactory) {
        var HOSTNAME = 'http://' + window.location.hostname;
        var CONTEXT = '/otus-domain-rest';
        var VERSION = '/v01';
        var token;

        var self = this;
        self.getInstallerResource = getInstallerResource;
        self.getAuthenticatorResource = getAuthenticatorResource;
        self.getUserResource = getUserResource;
        self.getRepositoryResource = getRepositoryResource;
        self.setHostname = setHostname;
        self.setContext = setContext;
        self.setVersion = setVersion;
        self.setSecurityToken = setSecurityToken;

        function setSecurityToken(securityToken) {
            token = securityToken;
        }

        function setHostname(hostname) {
            HOSTNAME = hostname;
        }

        function setContext(context) {
            CONTEXT = '/' + context;
        }

        function setVersion(version) {
            VERSION = '/' + version;
        }

        function getRestPrefix() {
            return HOSTNAME + CONTEXT + VERSION;
        }

        function getHostName() {
            return HOSTNAME;
        }

        function getContext() {
            return CONTEXT;
        }

        function getVersion() {
            return VERSION;
        }

        function getInstallerResource() {
            var prefix = getRestPrefix();
            return InstallerResourceFactory.create(prefix, token);
        }

        function getAuthenticatorResource() {
            var prefix = getRestPrefix();
            return AuthenticatorResourceFactory.create(prefix, token);
        }

        function getUserResource() {
            var prefix = getRestPrefix();
            return UserResourceFactory.create(prefix, token);
        }

        function getRepositoryResource() {
            var prefix = getRestPrefix();
            return RepositoryResourceFactory.create(prefix, token);
        }
    }

}());
