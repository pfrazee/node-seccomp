const seccomp = require('bindings')('seccomp')

module.exports = Object.assign({}, seccomp, {
  errors: {
    EACCES: seccomp.EACCES,
    EADDRINUSE: seccomp.EADDRINUSE,
    EADDRNOTAVAIL: seccomp.EADDRNOTAVAIL,
    EAFNOSUPPORT: seccomp.EAFNOSUPPORT,
    EAGAIN: seccomp.EAGAIN,
    EWOULDBLOCK: seccomp.EWOULDBLOCK,
    EALREADY: seccomp.EALREADY,
    EBADF: seccomp.EBADF,
    EBADMSG: seccomp.EBADMSG,
    EBUSY: seccomp.EBUSY,
    ECANCELED: seccomp.ECANCELED,
    ECHILD: seccomp.ECHILD,
    ECONNABORTED: seccomp.ECONNABORTED,
    ECONNREFUSED: seccomp.ECONNREFUSED,
    ECONNRESET: seccomp.ECONNRESET,
    EDEADLK: seccomp.EDEADLK,
    EDESTADDRREQ: seccomp.EDESTADDRREQ,
    EDOM: seccomp.EDOM,
    EDQUOT: seccomp.EDQUOT,
    EEXIST: seccomp.EEXIST,
    EFAULT: seccomp.EFAULT,
    EFBIG: seccomp.EFBIG,
    EHOSTUNREACH: seccomp.EHOSTUNREACH,
    EIDRM: seccomp.EIDRM,
    EILSEQ: seccomp.EILSEQ,
    EINPROGRESS: seccomp.EINPROGRESS,
    EINTR: seccomp.EINTR,
    EINVAL: seccomp.EINVAL,
    EIO: seccomp.EIO,
    EISCONN: seccomp.EISCONN,
    EISDIR: seccomp.EISDIR,
    ELOOP: seccomp.ELOOP,
    EMFILE: seccomp.EMFILE,
    EMLINK: seccomp.EMLINK,
    EMSGSIZE: seccomp.EMSGSIZE,
    EMULTIHOP: seccomp.EMULTIHOP,
    ENAMETOOLONG: seccomp.ENAMETOOLONG,
    ENETDOWN: seccomp.ENETDOWN,
    ENETRESET: seccomp.ENETRESET,
    ENETUNREACH: seccomp.ENETUNREACH,
    ENFILE: seccomp.ENFILE,
    ENOBUFS: seccomp.ENOBUFS,
    ENODATA: seccomp.ENODATA,
    ENODEV: seccomp.ENODEV,
    ENOENT: seccomp.ENOENT,
    ENOEXEC: seccomp.ENOEXEC,
    ENOLINK: seccomp.ENOLINK,
    ENOLCK: seccomp.ENOLCK,
    ENOMEM: seccomp.ENOMEM,
    ENOMSG: seccomp.ENOMSG,
    ENOPROTOOPT: seccomp.ENOPROTOOPT,
    ENOSPC: seccomp.ENOSPC,
    ENOSR: seccomp.ENOSR,
    ENOSTR: seccomp.ENOSTR,
    ENOSYS: seccomp.ENOSYS,
    ENOTCONN: seccomp.ENOTCONN,
    ENOTDIR: seccomp.ENOTDIR,
    ENOTEMPTY: seccomp.ENOTEMPTY,
    ENOTSOCK: seccomp.ENOTSOCK,
    ENOTSUP: seccomp.ENOTSUP,
    EOPNOTSUPP: seccomp.EOPNOTSUPP,
    ENOTTY: seccomp.ENOTTY,
    ENXIO: seccomp.ENXIO,
    EOVERFLOW: seccomp.EOVERFLOW,
    EPERM: seccomp.EPERM,
    EPIPE: seccomp.EPIPE,
    EPROTO: seccomp.EPROTO,
    EPROTONOSUPPORT: seccomp.EPROTONOSUPPORT,
    EPROTOTYPE: seccomp.EPROTOTYPE,
    ERANGE: seccomp.ERANGE,
    EROFS: seccomp.EROFS,
    ESPIPE: seccomp.ESPIPE,
    ESRCH: seccomp.ESRCH,
    ESTALE: seccomp.ESTALE,
    ETIME: seccomp.ETIME,
    ETIMEDOUT: seccomp.ETIMEDOUT,
    ETXTBSY: seccomp.ETXTBSY,
    EXDEV: seccomp.EXDEV
  }
})
