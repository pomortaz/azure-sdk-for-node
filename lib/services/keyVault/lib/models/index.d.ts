/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
// TODO: Include PageTemplateModels here too?? Probably
 */


/**
 * @class
 * Initializes a new instance of the Attributes class.
 * @constructor
 * The object attributes managed by the KeyVault service
 *
 * @member {boolean} [enabled] Determines whether the object is enabled
 * 
 * @member {date} [notBefore] Not before date in UTC
 * 
 * @member {date} [expires] Expiry date in UTC
 * 
 * @member {date} [created] Creation time in UTC
 * 
 * @member {date} [updated] Last updated time in UTC
 * 
 */
export interface Attributes {
    enabled?: boolean;
    notBefore?: Date;
    expires?: Date;
    created?: Date;
    updated?: Date;
}

/**
 * @class
 * Initializes a new instance of the JsonWebKey class.
 * @constructor
 * As of http://tools.ietf.org/html/draft-ietf-jose-json-web-key-18
 *
 * @member {string} [kid] Key Identifier
 * 
 * @member {string} [kty] Key type, usually RSA
 * 
 * @member {array} [keyOps]
 * 
 * @member {buffer} [n] RSA modulus
 * 
 * @member {buffer} [e] RSA public exponent
 * 
 * @member {buffer} [d] RSA private exponent
 * 
 * @member {buffer} [dp] RSA Private Key Parameter
 * 
 * @member {buffer} [dq] RSA Private Key Parameter
 * 
 * @member {buffer} [qi] RSA Private Key Parameter
 * 
 * @member {buffer} [p] RSA secret prime
 * 
 * @member {buffer} [q] RSA secret prime, with p < q
 * 
 * @member {buffer} [k] Symmetric key
 * 
 * @member {buffer} [t] HSM Token, used with Bring Your Own Key
 * 
 */
export interface JsonWebKey {
    kid?: string;
    kty?: string;
    keyOps?: string[];
    n?: Buffer;
    e?: Buffer;
    d?: Buffer;
    dp?: Buffer;
    dq?: Buffer;
    qi?: Buffer;
    p?: Buffer;
    q?: Buffer;
    k?: Buffer;
    t?: Buffer;
}

/**
 * @class
 * Initializes a new instance of the KeyAttributes class.
 * @constructor
 * The attributes of a key managed by the KeyVault service
 *
 */
export interface KeyAttributes extends Attributes {
}

/**
 * @class
 * Initializes a new instance of the KeyBundle class.
 * @constructor
 * A KeyBundle consisting of a WebKey plus its Attributes
 *
 * @member {object} [key] The Json web key
 * 
 * @member {string} [key.kid] Key Identifier
 * 
 * @member {string} [key.kty] Key type, usually RSA
 * 
 * @member {array} [key.keyOps]
 * 
 * @member {buffer} [key.n] RSA modulus
 * 
 * @member {buffer} [key.e] RSA public exponent
 * 
 * @member {buffer} [key.d] RSA private exponent
 * 
 * @member {buffer} [key.dp] RSA Private Key Parameter
 * 
 * @member {buffer} [key.dq] RSA Private Key Parameter
 * 
 * @member {buffer} [key.qi] RSA Private Key Parameter
 * 
 * @member {buffer} [key.p] RSA secret prime
 * 
 * @member {buffer} [key.q] RSA secret prime, with p < q
 * 
 * @member {buffer} [key.k] Symmetric key
 * 
 * @member {buffer} [key.t] HSM Token, used with Bring Your Own Key
 * 
 * @member {object} [attributes] The key management attributes
 * 
 * @member {object} [tags] Application-specific metadata in the form of
 * key-value pairs
 * 
 */
export interface KeyBundle {
    key?: JsonWebKey;
    attributes?: KeyAttributes;
    tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the KeyItem class.
 * @constructor
 * The key item containing key metadata
 *
 * @member {string} [kid] Key Identifier
 * 
 * @member {object} [attributes] The key management attributes
 * 
 * @member {object} [tags] Application-specific metadata in the form of
 * key-value pairs
 * 
 */
export interface KeyItem {
    kid?: string;
    attributes?: KeyAttributes;
    tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the SecretBundle class.
 * @constructor
 * A Secret consisting of a value, id and its attributes.
 *
 * @member {string} [value] The secret value
 * 
 * @member {string} [id] The secret id
 * 
 * @member {string} [contentType] The content type of the secret
 * 
 * @member {object} [attributes] The secret management attributes
 * 
 * @member {object} [tags] Application-specific metadata in the form of
 * key-value pairs
 * 
 */
export interface SecretBundle {
    value?: string;
    id?: string;
    contentType?: string;
    attributes?: SecretAttributes;
    tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the SecretAttributes class.
 * @constructor
 * The secret management attributes
 *
 */
export interface SecretAttributes extends Attributes {
}

/**
 * @class
 * Initializes a new instance of the SecretItem class.
 * @constructor
 * The secret item containing secret metadata
 *
 * @member {string} [id] Secret Identifier
 * 
 * @member {object} [attributes] The secret management attributes
 * 
 * @member {object} [tags] Application-specific metadata in the form of
 * key-value pairs
 * 
 * @member {string} [contentType] Type of the secret value such as a password
 * 
 */
export interface SecretItem {
    id?: string;
    attributes?: SecretAttributes;
    tags?: { [propertyName: string]: string };
    contentType?: string;
}

/**
 * @class
 * Initializes a new instance of the CertificateAttributes class.
 * @constructor
 * The certificate management attributes
 *
 */
export interface CertificateAttributes extends Attributes {
}

/**
 * @class
 * Initializes a new instance of the CertificateItem class.
 * @constructor
 * The certificate item containing certificate metadata
 *
 * @member {string} [id] Certificate Identifier
 * 
 * @member {object} [attributes] The certificate management attributes
 * 
 * @member {object} [tags] Application-specific metadata in the form of
 * key-value pairs
 * 
 * @member {buffer} [x5T] Thumbprint of the certificate.
 * 
 */
export interface CertificateItem {
    id?: string;
    attributes?: CertificateAttributes;
    tags?: { [propertyName: string]: string };
    x5T?: Buffer;
}

/**
 * @class
 * Initializes a new instance of the CertificateIssuerItem class.
 * @constructor
 * The certificate issuer item containing certificate issuer metadata
 *
 * @member {string} [id] Certificate Identifier
 * 
 * @member {string} [provider] The name of the issuer.
 * 
 */
export interface CertificateIssuerItem {
    id?: string;
    provider?: string;
}

/**
 * @class
 * Initializes a new instance of the CertificateBundle class.
 * @constructor
 * A certificate bundle consists of a certificate (X509) plus its attributes.
 *
 * @member {string} [id] The certificate id
 * 
 * @member {string} [kid] The key id
 * 
 * @member {string} [sid] The secret id
 * 
 * @member {buffer} [x5t] Thumbprint of the certificate.
 * 
 * @member {object} [policy] The management policy.
 * 
 * @member {string} [policy.id] The certificate id
 * 
 * @member {object} [policy.keyProperties] Properties of the key backing a
 * certificate.
 * 
 * @member {boolean} [policy.keyProperties.exportable] Indicates if the
 * private key can be exported.
 * 
 * @member {string} [policy.keyProperties.keyType] The key type.
 * 
 * @member {number} [policy.keyProperties.keySize] The key size.
 * 
 * @member {boolean} [policy.keyProperties.reuseKey] Indicates if the same key
 * pair will be used on certificate renewal.
 * 
 * @member {object} [policy.secretProperties] Properties of the secret backing
 * a certificate.
 * 
 * @member {string} [policy.secretProperties.contentType] The media type (MIME
 * type).
 * 
 * @member {object} [policy.x509CertificateProperties] Properties of the X509
 * component of a certificate.
 * 
 * @member {string} [policy.x509CertificateProperties.subject] The subject
 * name. Should be a valid X509 Distinguished Name.
 * 
 * @member {array} [policy.x509CertificateProperties.ekus] The enhaunced key
 * usage.
 * 
 * @member {object} [policy.x509CertificateProperties.subjectAlternativeNames]
 * The subject alternative names.
 * 
 * @member {array}
 * [policy.x509CertificateProperties.subjectAlternativeNames.emails] Email
 * addresses.
 * 
 * @member {array}
 * [policy.x509CertificateProperties.subjectAlternativeNames.dnsNames] Domain
 * names.
 * 
 * @member {array}
 * [policy.x509CertificateProperties.subjectAlternativeNames.upns] User
 * principal names.
 * 
 * @member {array} [policy.x509CertificateProperties.keyUsage] List of key
 * usages.
 * 
 * @member {number} [policy.x509CertificateProperties.validityInMonths] The
 * subject alternate names.
 * 
 * @member {array} [policy.lifetimeActions] Actions that will be performed by
 * Key Vault over the lifetime of a certificate.
 * 
 * @member {object} [policy.issuerReference] Reference to the issuer of the
 * X509 component of a certificate.
 * 
 * @member {string} [policy.issuerReference.name] Name of the referenced
 * issuer object.
 * 
 * @member {object} [policy.attributes] The certificate attributes.
 * 
 * @member {buffer} [cer] CER contents of x509 certificate.
 * 
 * @member {string} [contentType] The content type of the secret
 * 
 * @member {object} [attributes] The certificate attributes.
 * 
 * @member {object} [tags] Application-specific metadata in the form of
 * key-value pairs
 * 
 */
export interface CertificateBundle {
    id?: string;
    kid?: string;
    sid?: string;
    x5t?: Buffer;
    policy?: CertificatePolicy;
    cer?: Buffer;
    contentType?: string;
    attributes?: CertificateAttributes;
    tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the CertificatePolicy class.
 * @constructor
 * Management policy for a certificate.
 *
 * @member {string} [id] The certificate id
 * 
 * @member {object} [keyProperties] Properties of the key backing a
 * certificate.
 * 
 * @member {boolean} [keyProperties.exportable] Indicates if the private key
 * can be exported.
 * 
 * @member {string} [keyProperties.keyType] The key type.
 * 
 * @member {number} [keyProperties.keySize] The key size.
 * 
 * @member {boolean} [keyProperties.reuseKey] Indicates if the same key pair
 * will be used on certificate renewal.
 * 
 * @member {object} [secretProperties] Properties of the secret backing a
 * certificate.
 * 
 * @member {string} [secretProperties.contentType] The media type (MIME type).
 * 
 * @member {object} [x509CertificateProperties] Properties of the X509
 * component of a certificate.
 * 
 * @member {string} [x509CertificateProperties.subject] The subject name.
 * Should be a valid X509 Distinguished Name.
 * 
 * @member {array} [x509CertificateProperties.ekus] The enhaunced key usage.
 * 
 * @member {object} [x509CertificateProperties.subjectAlternativeNames] The
 * subject alternative names.
 * 
 * @member {array} [x509CertificateProperties.subjectAlternativeNames.emails]
 * Email addresses.
 * 
 * @member {array}
 * [x509CertificateProperties.subjectAlternativeNames.dnsNames] Domain names.
 * 
 * @member {array} [x509CertificateProperties.subjectAlternativeNames.upns]
 * User principal names.
 * 
 * @member {array} [x509CertificateProperties.keyUsage] List of key usages.
 * 
 * @member {number} [x509CertificateProperties.validityInMonths] The subject
 * alternate names.
 * 
 * @member {array} [lifetimeActions] Actions that will be performed by Key
 * Vault over the lifetime of a certificate.
 * 
 * @member {object} [issuerReference] Reference to the issuer of the X509
 * component of a certificate.
 * 
 * @member {string} [issuerReference.name] Name of the referenced issuer
 * object.
 * 
 * @member {object} [attributes] The certificate attributes.
 * 
 */
export interface CertificatePolicy {
    id?: string;
    keyProperties?: KeyProperties;
    secretProperties?: SecretProperties;
    x509CertificateProperties?: X509CertificateProperties;
    lifetimeActions?: LifetimeAction[];
    issuerReference?: IssuerReference;
    attributes?: CertificateAttributes;
}

/**
 * @class
 * Initializes a new instance of the KeyProperties class.
 * @constructor
 * Properties of the key pair backing a certificate.
 *
 * @member {boolean} [exportable] Indicates if the private key can be exported.
 * 
 * @member {string} [keyType] The key type.
 * 
 * @member {number} [keySize] The key size.
 * 
 * @member {boolean} [reuseKey] Indicates if the same key pair will be used on
 * certificate renewal.
 * 
 */
export interface KeyProperties {
    exportable?: boolean;
    keyType?: string;
    keySize?: number;
    reuseKey?: boolean;
}

/**
 * @class
 * Initializes a new instance of the SecretProperties class.
 * @constructor
 * Properties of the key backing a certificate.
 *
 * @member {string} [contentType] The media type (MIME type).
 * 
 */
export interface SecretProperties {
    contentType?: string;
}

/**
 * @class
 * Initializes a new instance of the X509CertificateProperties class.
 * @constructor
 * Properties of the X509 component of a certificate.
 *
 * @member {string} [subject] The subject name. Should be a valid X509
 * Distinguished Name.
 * 
 * @member {array} [ekus] The enhaunced key usage.
 * 
 * @member {object} [subjectAlternativeNames] The subject alternative names.
 * 
 * @member {array} [subjectAlternativeNames.emails] Email addresses.
 * 
 * @member {array} [subjectAlternativeNames.dnsNames] Domain names.
 * 
 * @member {array} [subjectAlternativeNames.upns] User principal names.
 * 
 * @member {array} [keyUsage] List of key usages.
 * 
 * @member {number} [validityInMonths] The subject alternate names.
 * 
 */
export interface X509CertificateProperties {
    subject?: string;
    ekus?: string[];
    subjectAlternativeNames?: SubjectAlternativeNames;
    keyUsage?: string[];
    validityInMonths?: number;
}

/**
 * @class
 * Initializes a new instance of the SubjectAlternativeNames class.
 * @constructor
 * The subject alternate names of a X509 object.
 *
 * @member {array} [emails] Email addresses.
 * 
 * @member {array} [dnsNames] Domain names.
 * 
 * @member {array} [upns] User principal names.
 * 
 */
export interface SubjectAlternativeNames {
    emails?: string[];
    dnsNames?: string[];
    upns?: string[];
}

/**
 * @class
 * Initializes a new instance of the LifetimeAction class.
 * @constructor
 * Action and its trigger that will be performed by Key Vault over the
 * lifetime of a certificate.
 *
 * @member {object} [trigger] The condition that will execute the action.
 * 
 * @member {number} [trigger.lifetimePercentage] Percentage of lifetime as
 * which to trigger. Value should be between 1 and 99.
 * 
 * @member {number} [trigger.daysBeforeExpiry] Days before expiry.
 * 
 * @member {object} [action] The action that will be executed.
 * 
 * @member {string} [action.actionType] The type of the action. Possible
 * values include: 'EmailContacts', 'AutoRenew'
 * 
 */
export interface LifetimeAction {
    trigger?: Trigger;
    action?: Action;
}

/**
 * @class
 * Initializes a new instance of the Trigger class.
 * @constructor
 * A condition to be satisfied for an action to be executed.
 *
 * @member {number} [lifetimePercentage] Percentage of lifetime as which to
 * trigger. Value should be between 1 and 99.
 * 
 * @member {number} [daysBeforeExpiry] Days before expiry.
 * 
 */
export interface Trigger {
    lifetimePercentage?: number;
    daysBeforeExpiry?: number;
}

/**
 * @class
 * Initializes a new instance of the Action class.
 * @constructor
 * The action that will be executed.
 *
 * @member {string} [actionType] The type of the action. Possible values
 * include: 'EmailContacts', 'AutoRenew'
 * 
 */
export interface Action {
    actionType?: string;
}

/**
 * @class
 * Initializes a new instance of the IssuerReference class.
 * @constructor
 * Reference to the issuer of the X509 component of a certificate.
 *
 * @member {string} [name] Name of the referenced issuer object.
 * 
 */
export interface IssuerReference {
    name?: string;
}

/**
 * @class
 * Initializes a new instance of the CertificateOperation class.
 * @constructor
 * A certificate operation is returned in case of async requests.
 *
 * @member {string} [id] The certificate id
 * 
 * @member {object} [issuerReference] Reference to the issuer of the X509
 * component of a certificate.
 * 
 * @member {string} [issuerReference.name] Name of the referenced issuer
 * object.
 * 
 * @member {buffer} [csr] The Certificate Signing Request (CSR) that is being
 * used in the certificate operation.
 * 
 * @member {boolean} [cancellationRequested] Indicates if cancellation was
 * requested on the certificate operation.
 * 
 * @member {string} [status] Status of the certificate operation.
 * 
 * @member {string} [statusDetails] The status details of the certificate
 * operation.
 * 
 * @member {object} [error] Error encountered, if any, during the certificate
 * operation.
 * 
 * @member {string} [error.code] The error code.
 * 
 * @member {string} [error.message] The error message.
 * 
 * @member {string} [target] Location which contains the result of the
 * certificate operation.
 * 
 * @member {string} [requestId] Identifier for the certificate operation.
 * 
 */
export interface CertificateOperation {
    id?: string;
    issuerReference?: IssuerReference;
    csr?: Buffer;
    cancellationRequested?: boolean;
    status?: string;
    statusDetails?: string;
    error?: ErrorModel;
    target?: string;
    requestId?: string;
}

/**
 * @class
 * Initializes a new instance of the ErrorModel class.
 * @constructor
 * The key vault server error
 *
 * @member {string} [code] The error code.
 * 
 * @member {string} [message] The error message.
 * 
 */
export interface ErrorModel {
    code?: string;
    message?: string;
}

/**
 * @class
 * Initializes a new instance of the IssuerBundle class.
 * @constructor
 * The issuer for Key Vault certificate
 *
 * @member {string} [id] Identifier for the issuer object.
 * 
 * @member {string} [provider] The name of the issuer.
 * 
 * @member {object} [credentials] The credentials to be used for the issuer.
 * 
 * @member {string} [credentials.accountId] The user name/account name/account
 * id.
 * 
 * @member {string} [credentials.password] The password/secret/account key.
 * 
 * @member {object} [organizationDetails] Details of the organization as
 * provided to the issuer.
 * 
 * @member {string} [organizationDetails.id] Id of the organization.
 * 
 * @member {array} [organizationDetails.adminDetails] Details of the
 * organization administrator.
 * 
 * @member {object} [attributes] Attributes of the issuer object.
 * 
 * @member {boolean} [attributes.enabled] Determines whether the issuer is
 * enabled
 * 
 * @member {date} [attributes.created] Creation time in UTC
 * 
 * @member {date} [attributes.updated] Last updated time in UTC
 * 
 */
export interface IssuerBundle {
    id?: string;
    provider?: string;
    credentials?: IssuerCredentials;
    organizationDetails?: OrganizationDetails;
    attributes?: IssuerAttributes;
}

/**
 * @class
 * Initializes a new instance of the IssuerCredentials class.
 * @constructor
 * The credentials to be used for the certificate issuer.
 *
 * @member {string} [accountId] The user name/account name/account id.
 * 
 * @member {string} [password] The password/secret/account key.
 * 
 */
export interface IssuerCredentials {
    accountId?: string;
    password?: string;
}

/**
 * @class
 * Initializes a new instance of the OrganizationDetails class.
 * @constructor
 * Details of the organization of the certificate issuer.
 *
 * @member {string} [id] Id of the organization.
 * 
 * @member {array} [adminDetails] Details of the organization administrator.
 * 
 */
export interface OrganizationDetails {
    id?: string;
    adminDetails?: AdministratorDetails[];
}

/**
 * @class
 * Initializes a new instance of the AdministratorDetails class.
 * @constructor
 * Details of the organization administrator of the certificate issuer
 *
 * @member {string} [firstName] First name.
 * 
 * @member {string} [lastName] Last name.
 * 
 * @member {string} [emailAddress] Email addresss.
 * 
 * @member {string} [phone] Phone number.
 * 
 */
export interface AdministratorDetails {
    firstName?: string;
    lastName?: string;
    emailAddress?: string;
    phone?: string;
}

/**
 * @class
 * Initializes a new instance of the IssuerAttributes class.
 * @constructor
 * The attributes of an issuer managed by the KeyVault service
 *
 * @member {boolean} [enabled] Determines whether the issuer is enabled
 * 
 * @member {date} [created] Creation time in UTC
 * 
 * @member {date} [updated] Last updated time in UTC
 * 
 */
export interface IssuerAttributes {
    enabled?: boolean;
    created?: Date;
    updated?: Date;
}

/**
 * @class
 * Initializes a new instance of the Contacts class.
 * @constructor
 * The contacts for the vault certificates.
 *
 * @member {string} [id] Identifier for the contacts collection.
 * 
 * @member {array} [contactList] The contact list for the vault certificates.
 * 
 */
export interface Contacts {
    id?: string;
    contactList?: Contact[];
}

/**
 * @class
 * Initializes a new instance of the Contact class.
 * @constructor
 * The contact information for the vault certificates.
 *
 * @member {string} [emailAddress] Email addresss.
 * 
 * @member {string} [name] Name.
 * 
 * @member {string} [phone] Phone number.
 * 
 */
export interface Contact {
    emailAddress?: string;
    name?: string;
    phone?: string;
}

/**
 * @class
 * Initializes a new instance of the KeyCreateParameters class.
 * @constructor
 * The key create parameters
 *
 * @member {string} kty The type of key to create. For valid key types, see
 * WebKeyTypes.
 * 
 * @member {number} [keySize] Size of the key
 * 
 * @member {array} [keyOps]
 * 
 * @member {object} [keyAttributes]
 * 
 * @member {object} [tags] Application-specific metadata in the form of
 * key-value pairs
 * 
 */
export interface KeyCreateParameters {
    kty: string;
    keySize?: number;
    keyOps?: string[];
    keyAttributes?: KeyAttributes;
    tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the KeyImportParameters class.
 * @constructor
 * The key import parameters
 *
 * @member {boolean} [hsm] Whether to import as a hardware key (HSM) or
 * software key
 * 
 * @member {object} key The Json web key
 * 
 * @member {string} [key.kid] Key Identifier
 * 
 * @member {string} [key.kty] Key type, usually RSA
 * 
 * @member {array} [key.keyOps]
 * 
 * @member {buffer} [key.n] RSA modulus
 * 
 * @member {buffer} [key.e] RSA public exponent
 * 
 * @member {buffer} [key.d] RSA private exponent
 * 
 * @member {buffer} [key.dp] RSA Private Key Parameter
 * 
 * @member {buffer} [key.dq] RSA Private Key Parameter
 * 
 * @member {buffer} [key.qi] RSA Private Key Parameter
 * 
 * @member {buffer} [key.p] RSA secret prime
 * 
 * @member {buffer} [key.q] RSA secret prime, with p < q
 * 
 * @member {buffer} [key.k] Symmetric key
 * 
 * @member {buffer} [key.t] HSM Token, used with Bring Your Own Key
 * 
 * @member {object} [keyAttributes] The key management attributes
 * 
 * @member {object} [tags] Application-specific metadata in the form of
 * key-value pairs
 * 
 */
export interface KeyImportParameters {
    hsm?: boolean;
    key: JsonWebKey;
    keyAttributes?: KeyAttributes;
    tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the KeyOperationsParameters class.
 * @constructor
 * The key operations parameters
 *
 * @member {string} algorithm algorithm identifier
 * 
 * @member {buffer} value
 * 
 */
export interface KeyOperationsParameters {
    algorithm: string;
    value: Buffer;
}

/**
 * @class
 * Initializes a new instance of the KeyVerifyParameters class.
 * @constructor
 * The key verify parameters
 *
 * @member {string} algorithm The signing/verification algorithm. For more
 * information on possible algorithm types, see JsonWebKeySignatureAlgorithm.
 * 
 * @member {buffer} digest The digest used for signing
 * 
 * @member {buffer} signature The signature to be verified
 * 
 */
export interface KeyVerifyParameters {
    algorithm: string;
    digest: Buffer;
    signature: Buffer;
}

/**
 * @class
 * Initializes a new instance of the KeyUpdateParameters class.
 * @constructor
 * The key update parameters
 *
 * @member {array} [keyOps] Json web key operations. For more information on
 * possible key operations, see JsonWebKeyOperation.
 * 
 * @member {object} [keyAttributes]
 * 
 * @member {object} [tags] Application-specific metadata in the form of
 * key-value pairs
 * 
 */
export interface KeyUpdateParameters {
    keyOps?: string[];
    keyAttributes?: KeyAttributes;
    tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the KeyRestoreParameters class.
 * @constructor
 * The key restore parameters
 *
 * @member {buffer} keyBundleBackup the backup blob associated with a key
 * bundle
 * 
 */
export interface KeyRestoreParameters {
    keyBundleBackup: Buffer;
}

/**
 * @class
 * Initializes a new instance of the SecretSetParameters class.
 * @constructor
 * The secret set parameters
 *
 * @member {string} value The value of the secret
 * 
 * @member {object} [tags] Application-specific metadata in the form of
 * key-value pairs
 * 
 * @member {string} [contentType] Type of the secret value such as a password
 * 
 * @member {object} [secretAttributes] The secret management attributes
 * 
 */
export interface SecretSetParameters {
    value: string;
    tags?: { [propertyName: string]: string };
    contentType?: string;
    secretAttributes?: SecretAttributes;
}

/**
 * @class
 * Initializes a new instance of the SecretUpdateParameters class.
 * @constructor
 * The secret update parameters
 *
 * @member {string} [contentType] Type of the secret value such as a password
 * 
 * @member {object} [secretAttributes] The secret management attributes
 * 
 * @member {object} [tags] Application-specific metadata in the form of
 * key-value pairs
 * 
 */
export interface SecretUpdateParameters {
    contentType?: string;
    secretAttributes?: SecretAttributes;
    tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the CertificateCreateParameters class.
 * @constructor
 * The certificate create parameters
 *
 * @member {object} [certificatePolicy] The management policy for the
 * certificate
 * 
 * @member {string} [certificatePolicy.id] The certificate id
 * 
 * @member {object} [certificatePolicy.keyProperties] Properties of the key
 * backing a certificate.
 * 
 * @member {boolean} [certificatePolicy.keyProperties.exportable] Indicates if
 * the private key can be exported.
 * 
 * @member {string} [certificatePolicy.keyProperties.keyType] The key type.
 * 
 * @member {number} [certificatePolicy.keyProperties.keySize] The key size.
 * 
 * @member {boolean} [certificatePolicy.keyProperties.reuseKey] Indicates if
 * the same key pair will be used on certificate renewal.
 * 
 * @member {object} [certificatePolicy.secretProperties] Properties of the
 * secret backing a certificate.
 * 
 * @member {string} [certificatePolicy.secretProperties.contentType] The media
 * type (MIME type).
 * 
 * @member {object} [certificatePolicy.x509CertificateProperties] Properties
 * of the X509 component of a certificate.
 * 
 * @member {string} [certificatePolicy.x509CertificateProperties.subject] The
 * subject name. Should be a valid X509 Distinguished Name.
 * 
 * @member {array} [certificatePolicy.x509CertificateProperties.ekus] The
 * enhaunced key usage.
 * 
 * @member {object}
 * [certificatePolicy.x509CertificateProperties.subjectAlternativeNames] The
 * subject alternative names.
 * 
 * @member {array}
 * [certificatePolicy.x509CertificateProperties.subjectAlternativeNames.emails]
 * Email addresses.
 * 
 * @member {array}
 * [certificatePolicy.x509CertificateProperties.subjectAlternativeNames.dnsNames]
 * Domain names.
 * 
 * @member {array}
 * [certificatePolicy.x509CertificateProperties.subjectAlternativeNames.upns]
 * User principal names.
 * 
 * @member {array} [certificatePolicy.x509CertificateProperties.keyUsage] List
 * of key usages.
 * 
 * @member {number}
 * [certificatePolicy.x509CertificateProperties.validityInMonths] The subject
 * alternate names.
 * 
 * @member {array} [certificatePolicy.lifetimeActions] Actions that will be
 * performed by Key Vault over the lifetime of a certificate.
 * 
 * @member {object} [certificatePolicy.issuerReference] Reference to the
 * issuer of the X509 component of a certificate.
 * 
 * @member {string} [certificatePolicy.issuerReference.name] Name of the
 * referenced issuer object.
 * 
 * @member {object} [certificatePolicy.attributes] The certificate attributes.
 * 
 * @member {object} [certificateAttributes] The attributes of the certificate
 * (optional)
 * 
 * @member {object} [tags] Application-specific metadata in the form of
 * key-value pairs
 * 
 */
export interface CertificateCreateParameters {
    certificatePolicy?: CertificatePolicy;
    certificateAttributes?: CertificateAttributes;
    tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the CertificateImportParameters class.
 * @constructor
 * The certificate import parameters
 *
 * @member {string} base64EncodedCertificate Base64 encoded representation of
 * the certificate object to import. This certificate needs to contain the
 * private key.
 * 
 * @member {string} [password] If the private key in base64EncodedCertificate
 * is encrypted, the password used for encryption
 * 
 * @member {object} [certificatePolicy] The management policy for the
 * certificate
 * 
 * @member {string} [certificatePolicy.id] The certificate id
 * 
 * @member {object} [certificatePolicy.keyProperties] Properties of the key
 * backing a certificate.
 * 
 * @member {boolean} [certificatePolicy.keyProperties.exportable] Indicates if
 * the private key can be exported.
 * 
 * @member {string} [certificatePolicy.keyProperties.keyType] The key type.
 * 
 * @member {number} [certificatePolicy.keyProperties.keySize] The key size.
 * 
 * @member {boolean} [certificatePolicy.keyProperties.reuseKey] Indicates if
 * the same key pair will be used on certificate renewal.
 * 
 * @member {object} [certificatePolicy.secretProperties] Properties of the
 * secret backing a certificate.
 * 
 * @member {string} [certificatePolicy.secretProperties.contentType] The media
 * type (MIME type).
 * 
 * @member {object} [certificatePolicy.x509CertificateProperties] Properties
 * of the X509 component of a certificate.
 * 
 * @member {string} [certificatePolicy.x509CertificateProperties.subject] The
 * subject name. Should be a valid X509 Distinguished Name.
 * 
 * @member {array} [certificatePolicy.x509CertificateProperties.ekus] The
 * enhaunced key usage.
 * 
 * @member {object}
 * [certificatePolicy.x509CertificateProperties.subjectAlternativeNames] The
 * subject alternative names.
 * 
 * @member {array}
 * [certificatePolicy.x509CertificateProperties.subjectAlternativeNames.emails]
 * Email addresses.
 * 
 * @member {array}
 * [certificatePolicy.x509CertificateProperties.subjectAlternativeNames.dnsNames]
 * Domain names.
 * 
 * @member {array}
 * [certificatePolicy.x509CertificateProperties.subjectAlternativeNames.upns]
 * User principal names.
 * 
 * @member {array} [certificatePolicy.x509CertificateProperties.keyUsage] List
 * of key usages.
 * 
 * @member {number}
 * [certificatePolicy.x509CertificateProperties.validityInMonths] The subject
 * alternate names.
 * 
 * @member {array} [certificatePolicy.lifetimeActions] Actions that will be
 * performed by Key Vault over the lifetime of a certificate.
 * 
 * @member {object} [certificatePolicy.issuerReference] Reference to the
 * issuer of the X509 component of a certificate.
 * 
 * @member {string} [certificatePolicy.issuerReference.name] Name of the
 * referenced issuer object.
 * 
 * @member {object} [certificatePolicy.attributes] The certificate attributes.
 * 
 * @member {object} [certificateAttributes] The attributes of the certificate
 * (optional)
 * 
 * @member {object} [tags] Application-specific metadata in the form of
 * key-value pairs
 * 
 */
export interface CertificateImportParameters {
    base64EncodedCertificate: string;
    password?: string;
    certificatePolicy?: CertificatePolicy;
    certificateAttributes?: CertificateAttributes;
    tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the CertificateUpdateParameters class.
 * @constructor
 * The certificate update parameters
 *
 * @member {object} [certificateAttributes] The attributes of the certificate
 * (optional)
 * 
 * @member {object} [tags] Application-specific metadata in the form of
 * key-value pairs
 * 
 */
export interface CertificateUpdateParameters {
    certificateAttributes?: CertificateAttributes;
    tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the CertificateMergeParameters class.
 * @constructor
 * The certificate merge parameters
 *
 * @member {array} x509Certificates The certificate or the certificate chain
 * to merge
 * 
 * @member {object} [certificateAttributes] The attributes of the certificate
 * (optional)
 * 
 * @member {object} [tags] Application-specific metadata in the form of
 * key-value pairs
 * 
 */
export interface CertificateMergeParameters {
    x509Certificates: Buffer[];
    certificateAttributes?: CertificateAttributes;
    tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the KeyOperationResult class.
 * @constructor
 * The key operation result
 *
 * @member {string} [kid] Key identifier
 * 
 * @member {buffer} [result]
 * 
 */
export interface KeyOperationResult {
    kid?: string;
    result?: Buffer;
}

/**
 * @class
 * Initializes a new instance of the KeyVerifyResult class.
 * @constructor
 * The key verify result
 *
 * @member {boolean} [value] true if the signature is verified, false
 * otherwise.
 * 
 */
export interface KeyVerifyResult {
    value?: boolean;
}

/**
 * @class
 * Initializes a new instance of the BackupKeyResult class.
 * @constructor
 * The backup key result, containing the backup blob
 *
 * @member {buffer} [value] The backup blob containing the backed up key
 * 
 */
export interface BackupKeyResult {
    value?: Buffer;
}

/**
 * @class
 * Initializes a new instance of the PendingCertificateSigningRequestResult class.
 * @constructor
 * The pending certificate signing request result
 *
 * @member {string} [value] The pending certificate signing request as Base64
 * encoded string.
 * 
 */
export interface PendingCertificateSigningRequestResult {
    value?: string;
}

/**
 * @class
 * Initializes a new instance of the KeyVaultError class.
 * @constructor
 * the key vault error exception
 *
 * @member {object} [error]
 * 
 * @member {string} [error.code] The error code.
 * 
 * @member {string} [error.message] The error message.
 * 
 */
export interface KeyVaultError {
    error?: ErrorModel;
}
