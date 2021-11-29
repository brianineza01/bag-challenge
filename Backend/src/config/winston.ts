import os from "os";
import winston from "winston";

const { combine, timestamp, label, prettyPrint } = winston.format;

const iFaces = os.networkInterfaces();
let ipName, macName;

// Looping through network interfaces to get Mac and Ip address.
Object.keys(iFaces).forEach((ifname) => {
  let alias = 0;
  iFaces[ifname].forEach((iface) => {
    if (iface.family !== "IPv4" || iface.internal !== false) {
      return;
    }
    if (alias >= 1) {
      ipName = iface.address;
      macName = iface.mac;
    } else {
      ipName = iface.address;
      macName = iface.mac;
    }
    alias += 1;
  });
});

// Setting up options required by Winston.
const options = {
  fileHttp: {
    level: "http",
    filename: "logs/http.logs",
    colorize: false,
    format: combine(label({ label: "Http" })),
  },
  fileInfo: {
    level: "info",
    filename: "logs/info.logs",
    colorize: false,
    format: combine(label({ label: "Info" })),
  },
  fileErr: {
    level: "error",
    filename: "logs/error.logs",
    colorize: false,
    format: combine(label({ label: "Error" })),
  },
  console: {
    level: "debug",
    handleExceptions: true,
    json: false,
    colorize: true,
  },
  logdna: {
    key: "006e982ec80199d38816b7405e8f9cb2",
    hostname: os.hostname(),
    ip: ipName,
    mac: macName,
    app: "barefoot-nomad",
    handleExceptions: true,
    index_meta: true,
  },
};

// Initialising a Winston object.
const logger = winston.createLogger({
  //   colorize: false,
  handleExceptions: true,
  format: combine(timestamp(), prettyPrint()),
  transports: [
    new winston.transports.File(options.fileHttp),
    new winston.transports.File(options.fileInfo),
    new winston.transports.File(options.fileErr),
  ],
  exitOnError: false,
});

// Ignore logging in Production.
if (process.env.NODE_ENV !== "production") {
  logger.add(new winston.transports.Console(options.console));
}

export default logger;
