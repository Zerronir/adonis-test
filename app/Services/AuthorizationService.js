const ForbiddenAccessException = use('App/exceptions/ForbiddenAccessException');
const ResourceNotFoundException = use('App/Exceptions/ResourceNotFoundException');

class AuthorizationService {
  verifyPermission(resource, user)
  {
    if (!resource) {
      throw new ResourceNotFoundException();
    }

    if (resource.user_id !== user.id) {
      throw new ForbiddenAccessException();
    }
  }
}

module.exports = new AuthorizationService();
