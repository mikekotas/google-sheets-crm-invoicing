/**
 * Simplified portfolio excerpt.
 * Names and implementation details have been changed.
 * This is not the deployable production source.
 */

const ROLE_PERMISSIONS = Object.freeze({
  viewer: new Set(['record.read']),
  operator: new Set(['record.read', 'record.write', 'invoice.send']),
  administrator: new Set([
    'record.read',
    'record.write',
    'invoice.send',
    'access.manage',
  ]),
});

function authorize(actor, permission) {
  if (!actor || !actor.role) {
    throw new Error('Access denied.');
  }

  const allowed = ROLE_PERMISSIONS[actor.role];
  if (!allowed || !allowed.has(permission)) {
    throw new Error('Your role does not permit this operation.');
  }

  return actor;
}

function protectedOperation(session, permission, work) {
  const actor = authorize(resolveSignedInActor(session), permission);
  return work(actor);
}

