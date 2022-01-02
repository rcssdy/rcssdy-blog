var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/ryancassidy/Dropbox/My Mac (Ryans-MBP)/Documents/projects/rcssdy-blog/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
init_react();
var import_remix3 = __toModule(require_remix());
var import_react4 = __toModule(require("@chakra-ui/react"));

// app/components/Navigation.tsx
init_react();
var import_icons = __toModule(require("@chakra-ui/icons"));
var import_react = __toModule(require("@chakra-ui/react"));
var import_remix2 = __toModule(require_remix());
var NAVIGATION_ITEMS = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "Resume",
    href: "/resume"
  }
];
var DesktopNavigation = () => {
  return /* @__PURE__ */ React.createElement(import_react.Flex, {
    marginY: "auto",
    gap: 4
  }, NAVIGATION_ITEMS.map((item) => /* @__PURE__ */ React.createElement(import_remix2.Link, {
    key: item.label,
    to: item.href
  }, item.label)));
};
var MobileNavigation = () => {
  return /* @__PURE__ */ React.createElement(import_react.Stack, {
    bg: (0, import_react.useColorModeValue)("white", "gray.800"),
    display: { md: "none" },
    mb: 4
  }, NAVIGATION_ITEMS.map((navItem) => /* @__PURE__ */ React.createElement(MobileNavItem, __spreadValues({
    key: navItem.label
  }, navItem))));
};
var MobileNavItem = ({ label, href }) => {
  const { isOpen, onToggle } = (0, import_react.useDisclosure)();
  return /* @__PURE__ */ React.createElement(import_react.Stack, {
    spacing: 4,
    onClick: onToggle
  }, /* @__PURE__ */ React.createElement(import_react.Flex, {
    py: 2,
    as: import_remix2.Link,
    to: href ?? "#",
    justify: "space-between",
    align: "center",
    _hover: {
      textDecoration: "none"
    }
  }, /* @__PURE__ */ React.createElement(import_react.Text, {
    fontWeight: 600,
    color: (0, import_react.useColorModeValue)("gray.600", "gray.200")
  }, label)));
};
function Navigation() {
  const { colorMode, toggleColorMode } = (0, import_react.useColorMode)();
  const { isOpen, onToggle } = (0, import_react.useDisclosure)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react.Box, {
    px: 4,
    borderBottom: "1px",
    borderColor: (0, import_react.useColorModeValue)("gray.100", "gray.700"),
    mb: 8
  }, /* @__PURE__ */ React.createElement(import_react.Container, {
    maxW: "container.lg"
  }, /* @__PURE__ */ React.createElement(import_react.Flex, {
    py: 4,
    alignItems: "center",
    justifyContent: "space-between"
  }, /* @__PURE__ */ React.createElement(import_react.Box, null, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement(import_react.Heading, {
    as: "h1",
    size: "lg"
  }, "\u{1F468}\u{1F3FB}\u200D\u{1F4BB} rcssdy"))), /* @__PURE__ */ React.createElement(import_react.Box, {
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(import_react.Stack, {
    direction: "row",
    spacing: 4
  }, /* @__PURE__ */ React.createElement(import_react.Flex, {
    display: { base: "none", md: "flex" }
  }, /* @__PURE__ */ React.createElement(DesktopNavigation, null)), /* @__PURE__ */ React.createElement(import_react.IconButton, {
    onClick: toggleColorMode,
    icon: colorMode === "light" ? /* @__PURE__ */ React.createElement(import_icons.MoonIcon, null) : /* @__PURE__ */ React.createElement(import_icons.SunIcon, null),
    variant: "ghost",
    "aria-label": "Toggle Color Mode"
  }), /* @__PURE__ */ React.createElement(import_react.IconButton, {
    onClick: onToggle,
    display: { base: "flex", md: "none" },
    icon: isOpen ? /* @__PURE__ */ React.createElement(import_icons.CloseIcon, {
      w: 3,
      h: 3
    }) : /* @__PURE__ */ React.createElement(import_icons.HamburgerIcon, {
      w: 5,
      h: 5
    }),
    variant: "ghost",
    "aria-label": "Toggle Navigation"
  })))), /* @__PURE__ */ React.createElement(import_react.Collapse, {
    in: isOpen,
    animateOpacity: true
  }, /* @__PURE__ */ React.createElement(MobileNavigation, null)))));
}

// app/components/Footer.tsx
init_react();
var import_react2 = __toModule(require("@chakra-ui/react"));
var import_react3 = __toModule(require("@chakra-ui/react"));
var import_fa = __toModule(require("react-icons/fa"));
function Footer() {
  return /* @__PURE__ */ React.createElement(import_react2.Container, {
    maxW: "container.lg",
    my: 8
  }, /* @__PURE__ */ React.createElement(import_react2.Box, {
    display: "flex",
    justifyContent: "space-between"
  }, /* @__PURE__ */ React.createElement(import_react2.Text, {
    color: "gray.400",
    my: "auto"
  }, "Copyright \xA9 ", new Date().getFullYear(), " Ryan Cassidy. All rights reserved."), /* @__PURE__ */ React.createElement(import_react2.Grid, {
    display: "flex",
    gap: 4
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://twitter.com/rcssdy"
  }, /* @__PURE__ */ React.createElement(import_react3.Icon, {
    as: import_fa.FaTwitter,
    w: 6,
    h: 6,
    color: "blue.400"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/rcssdy"
  }, /* @__PURE__ */ React.createElement(import_react3.Icon, {
    as: import_fa.FaGithub,
    w: 6,
    h: 6
  })))));
}

// route-module:/Users/ryancassidy/Dropbox/My Mac (Ryans-MBP)/Documents/projects/rcssdy-blog/app/root.tsx
var meta = () => {
  return { title: "Ryan Cassidy | Software Engineer" };
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react4.ChakraProvider, null, /* @__PURE__ */ React.createElement(Navigation, null), /* @__PURE__ */ React.createElement(import_react4.Container, {
    maxW: "container.lg"
  }, /* @__PURE__ */ React.createElement(import_remix3.Outlet, null)), /* @__PURE__ */ React.createElement(Footer, null)), /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null)));
}

// route-module:/Users/ryancassidy/Dropbox/My Mac (Ryans-MBP)/Documents/projects/rcssdy-blog/app/routes/resume.tsx
var resume_exports = {};
__export(resume_exports, {
  default: () => Resume
});
init_react();
var import_react5 = __toModule(require("@chakra-ui/react"));
var import_react6 = __toModule(require("@chakra-ui/react"));
var import_di = __toModule(require("react-icons/di"));
var RESUME_ITEMS = [
  {
    position: "Senior Software Engineer",
    company: "Happy Group",
    duration: "January 2021 - Present",
    responsibilities: [
      "Take responsibility for the direction of internal tools and new recruitment website through contributing to codebase and fixing urgent issues",
      "Educate team members on how to write clean code, solve problems and communicate effectively",
      "Fulfill DevOps requirements through continuous integration, monitoring and logging",
      "Interpret requirements from management, and relay to development team",
      "Perform regular code reviews (one to one) to ensure code conforms to internal standards, and inspire confidence in team members when problems arise"
    ]
  },
  {
    position: "Senior WordPress Engineer",
    company: "Tridaz s.r.o",
    duration: "January 2016 - October 2020",
    responsibilities: [
      "Responsible for creating solutions to complex WordPress issues",
      "Co-ordinate client projects with management, and delegate design / development tasks to in-house team",
      "Build custom themes and plugins, making use of the latest technologies and techniques to build high-performing websites",
      "Educate team on best practices in WordPress, and document standard operating procedures to improve team efficiency"
    ]
  },
  {
    position: "Software Engineer",
    company: "Oceania University of Medicine",
    duration: "June 2016 - May 2017",
    responsibilities: [
      "Rewrite PHP codebase to fit with latest business requirements",
      "Optimize database queries to operate efficiently on large datasets",
      "Standardise design practices through effective use of the Bootstrap CSS framework",
      "Attend regular code reviews with management (database administrator) to improve knowledge of infrastructure and databases"
    ]
  },
  {
    position: "Software Engineer",
    company: "Balboa Pacific Media",
    duration: "June 2015 - May 2016",
    responsibilities: [
      "Integrate high-risk payment solutions and adhere to PCI compliance standards",
      "Construct sales funnels and co-ordinate required features with copywriting and design team",
      "Build and deploy product websites in a high-traffic environment with many concurrent users",
      "Advise on direction of e-commerce assets and new funnels"
    ]
  }
];
var ResumeItem = ({
  position,
  company,
  duration,
  responsibilities,
  logo
}) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react5.Grid, {
    borderWidth: "1px",
    borderRadius: "lg",
    p: 6,
    boxShadow: "base",
    gap: 2,
    autoFlow: "row dense"
  }, /* @__PURE__ */ React.createElement(import_react5.Flex, {
    direction: ["column-reverse", "column-reverse", "row"],
    justifyContent: "space-between"
  }, /* @__PURE__ */ React.createElement(import_react5.Box, null, /* @__PURE__ */ React.createElement(import_react5.Heading, {
    as: "h3",
    size: "md"
  }, position, ", ", company), /* @__PURE__ */ React.createElement(import_react5.Text, {
    fontSize: "lg"
  }, duration), /* @__PURE__ */ React.createElement(import_react5.UnorderedList, null, responsibilities == null ? void 0 : responsibilities.map((responsibility) => /* @__PURE__ */ React.createElement(import_react5.ListItem, null, responsibility)))), /* @__PURE__ */ React.createElement(import_react5.Box, null, logo && /* @__PURE__ */ React.createElement(import_react5.Image, {
    src: logo,
    display: { base: "none", md: "flex" },
    width: "100px"
  })))));
};
function Resume() {
  return /* @__PURE__ */ React.createElement(import_react5.Box, null, /* @__PURE__ */ React.createElement(import_react5.Grid, {
    gap: 8,
    autoFlow: "row dense"
  }, /* @__PURE__ */ React.createElement(import_react5.Grid, {
    gap: 4,
    autoFlow: "row dense"
  }, /* @__PURE__ */ React.createElement(import_react5.Flex, null, /* @__PURE__ */ React.createElement(import_react5.Box, null, /* @__PURE__ */ React.createElement(import_react5.Heading, {
    as: "h1",
    size: "lg"
  }, "Resume"))), /* @__PURE__ */ React.createElement(import_react5.Text, null, "Experienced software engineer with 7+ years of experience in commercial software development. In previous roles, I\u2019ve built software that has been served to millions of users. I believe my background is unique as I learned software development under supervision from an experienced database professional, having spent much of my career fixing old, outdated applications rather than greenfield projects. This has given me solid foundations in software engineering.")), /* @__PURE__ */ React.createElement(import_react5.Grid, {
    gap: 4,
    autoFlow: "row dense"
  }, /* @__PURE__ */ React.createElement(import_react5.Heading, {
    as: "h2",
    size: "md"
  }, "Technologies"), /* @__PURE__ */ React.createElement(import_react5.Flex, null, /* @__PURE__ */ React.createElement(import_react6.Icon, {
    as: import_di.DiJsBadge,
    w: 12,
    h: 12
  }), /* @__PURE__ */ React.createElement(import_react6.Icon, {
    as: import_di.DiReact,
    w: 12,
    h: 12
  }), /* @__PURE__ */ React.createElement(import_react6.Icon, {
    as: import_di.DiAngularSimple,
    w: 12,
    h: 12
  }), /* @__PURE__ */ React.createElement(import_react6.Icon, {
    as: import_di.DiPhp,
    w: 12,
    h: 12
  }), /* @__PURE__ */ React.createElement(import_react6.Icon, {
    as: import_di.DiWordpress,
    w: 12,
    h: 12
  }), /* @__PURE__ */ React.createElement(import_react6.Icon, {
    as: import_di.DiMysql,
    w: 12,
    h: 12
  }), /* @__PURE__ */ React.createElement(import_react6.Icon, {
    as: import_di.DiRedis,
    w: 12,
    h: 12
  }))), /* @__PURE__ */ React.createElement(import_react5.Grid, {
    gap: 4,
    autoFlow: "row dense"
  }, /* @__PURE__ */ React.createElement(import_react5.Heading, {
    as: "h2",
    size: "md"
  }, "Roles"), RESUME_ITEMS.map((item) => /* @__PURE__ */ React.createElement(ResumeItem, __spreadValues({}, item))))));
}

// route-module:/Users/ryancassidy/Dropbox/My Mac (Ryans-MBP)/Documents/projects/rcssdy-blog/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
init_react();
var import_react8 = __toModule(require("@chakra-ui/react"));

// app/components/Newsletter.tsx
init_react();
var import_react7 = __toModule(require("@chakra-ui/react"));
var import_remix4 = __toModule(require_remix());
function Newsletter() {
  return /* @__PURE__ */ React.createElement(import_react7.SimpleGrid, {
    columns: [1, 1, 2],
    gap: 8,
    borderWidth: "1px",
    borderRadius: "lg",
    p: 6,
    boxShadow: "base"
  }, /* @__PURE__ */ React.createElement(import_react7.Box, null, /* @__PURE__ */ React.createElement(import_react7.Grid, {
    gap: 4
  }, /* @__PURE__ */ React.createElement(import_react7.Heading, {
    as: "h1",
    size: "md"
  }, "Get Weekly Developer Notes \u{1F4DD}"), /* @__PURE__ */ React.createElement(import_react7.Text, {
    fontSize: "lg"
  }, "I write a weekly email that contains tips and tricks for developers looking to improve their coding skills and climb the career ladder."), /* @__PURE__ */ React.createElement(import_react7.Text, {
    fontSize: "lg"
  }, "I draw on my experience and knowledge to provide you with some of the best advice to help you get the most out of web development."))), /* @__PURE__ */ React.createElement(import_react7.Box, null, /* @__PURE__ */ React.createElement(import_remix4.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement(import_react7.Grid, {
    gap: 4
  }, /* @__PURE__ */ React.createElement(import_react7.FormControl, null, /* @__PURE__ */ React.createElement(import_react7.FormLabel, {
    htmlFor: "email"
  }, "Your Name"), /* @__PURE__ */ React.createElement(import_react7.Input, {
    id: "name",
    name: "name",
    type: "text"
  })), /* @__PURE__ */ React.createElement(import_react7.FormControl, null, /* @__PURE__ */ React.createElement(import_react7.FormLabel, {
    htmlFor: "email"
  }, "Your Email"), /* @__PURE__ */ React.createElement(import_react7.Input, {
    id: "email",
    name: "email",
    type: "email"
  }), /* @__PURE__ */ React.createElement(import_react7.FormHelperText, null, "I'll never share your email.")), /* @__PURE__ */ React.createElement(import_react7.Button, {
    type: "submit"
  }, "Subscribe")))));
}

// route-module:/Users/ryancassidy/Dropbox/My Mac (Ryans-MBP)/Documents/projects/rcssdy-blog/app/routes/index.tsx
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react8.Grid, {
    gap: 4,
    autoFlow: "row dense"
  }, /* @__PURE__ */ React.createElement(import_react8.Box, {
    display: "flex",
    flexDirection: ["column-reverse", "column-reverse", "row"],
    borderWidth: "1px",
    borderRadius: "lg",
    p: 8,
    gap: 4,
    boxShadow: "base"
  }, /* @__PURE__ */ React.createElement(import_react8.Grid, {
    gap: 4,
    autoFlow: "row dense"
  }, /* @__PURE__ */ React.createElement(import_react8.Heading, {
    as: "h1",
    size: "lg"
  }, "Hi, I'm Ryan Cassidy \u{1F44B}\u{1F3FB}"), /* @__PURE__ */ React.createElement(import_react8.Text, {
    fontSize: "lg"
  }, "I'm a Senior Software Engineer at Happy Group, solving complex problems with JavaScript & PHP. I've travelled the world writing code for ~8 years now, visiting many different countries in the process."), /* @__PURE__ */ React.createElement(import_react8.Button, {
    size: "lg",
    width: "150px"
  }, "Learn more")), /* @__PURE__ */ React.createElement(import_react8.Box, null, /* @__PURE__ */ React.createElement(import_react8.Image, {
    src: "/assets/me.jpg",
    alt: "Ryan Cassidy",
    width: ["60%", "60%", "450px"],
    mx: ["auto", "auto", "0"],
    borderRadius: "100%"
  }))), /* @__PURE__ */ React.createElement(Newsletter, null)));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/resume": {
    id: "routes/resume",
    parentId: "root",
    path: "resume",
    index: void 0,
    caseSensitive: void 0,
    module: resume_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9yeWFuY2Fzc2lkeS9Ecm9wYm94L015IE1hYyAoUnlhbnMtTUJQKS9Eb2N1bWVudHMvcHJvamVjdHMvcmNzc2R5LWJsb2cvYXBwL3Jvb3QudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL05hdmlnYXRpb24udHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL0Zvb3Rlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9yeWFuY2Fzc2lkeS9Ecm9wYm94L015IE1hYyAoUnlhbnMtTUJQKS9Eb2N1bWVudHMvcHJvamVjdHMvcmNzc2R5LWJsb2cvYXBwL3JvdXRlcy9yZXN1bWUudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvcnlhbmNhc3NpZHkvRHJvcGJveC9NeSBNYWMgKFJ5YW5zLU1CUCkvRG9jdW1lbnRzL3Byb2plY3RzL3Jjc3NkeS1ibG9nL2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL05ld3NsZXR0ZXIudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG4iLCAiLyoqXG4gKiByZW1peCB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY2xpZW50ID0gcmVxdWlyZSgnLi9jbGllbnQnKTtcbnZhciBzZXJ2ZXIgPSByZXF1aXJlKCcuL3NlcnZlcicpO1xudmFyIHBsYXRmb3JtID0gcmVxdWlyZSgnLi9wbGF0Zm9ybScpO1xuXG5cblxuT2JqZWN0LmtleXMoY2xpZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsaWVudFtrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMoc2VydmVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlcltrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMocGxhdGZvcm0pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGxhdGZvcm1ba107IH1cblx0fSk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvcnlhbmNhc3NpZHkvRHJvcGJveC9NeSBNYWMgKFJ5YW5zLU1CUCkvRG9jdW1lbnRzL3Byb2plY3RzL3Jjc3NkeS1ibG9nL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9yeWFuY2Fzc2lkeS9Ecm9wYm94L015IE1hYyAoUnlhbnMtTUJQKS9Eb2N1bWVudHMvcHJvamVjdHMvcmNzc2R5LWJsb2cvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9yeWFuY2Fzc2lkeS9Ecm9wYm94L015IE1hYyAoUnlhbnMtTUJQKS9Eb2N1bWVudHMvcHJvamVjdHMvcmNzc2R5LWJsb2cvYXBwL3JvdXRlcy9yZXN1bWUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9yeWFuY2Fzc2lkeS9Ecm9wYm94L015IE1hYyAoUnlhbnMtTUJQKS9Eb2N1bWVudHMvcHJvamVjdHMvcmNzc2R5LWJsb2cvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIi4vYXNzZXRzLmpzb25cIjtcbmV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgXCJyb290XCI6IHtcbiAgICBpZDogXCJyb290XCIsXG4gICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICBwYXRoOiBcIlwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUwXG4gIH0sXG4gIFwicm91dGVzL3Jlc3VtZVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3Jlc3VtZVwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcInJlc3VtZVwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxXG4gIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMlxuICB9XG59OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBDaGFrcmFQcm92aWRlciwgQ29udGFpbmVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvTmF2aWdhdGlvblwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9jb21wb25lbnRzL0Zvb3RlclwiO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogXCJSeWFuIENhc3NpZHkgfCBTb2Z0d2FyZSBFbmdpbmVlclwiIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8Q2hha3JhUHJvdmlkZXI+XG4gICAgICAgICAgPE5hdmlnYXRpb24gLz5cbiAgICAgICAgICA8Q29udGFpbmVyIG1heFc9XCJjb250YWluZXIubGdcIj5cbiAgICAgICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG4iLCAiaW1wb3J0IHtcbiAgQ2hldnJvbkRvd25JY29uLFxuICBDbG9zZUljb24sXG4gIEhhbWJ1cmdlckljb24sXG4gIE1vb25JY29uLFxuICBTdW5JY29uLFxufSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBUZXh0LFxuICBCdXR0b24sXG4gIENvbnRhaW5lcixcbiAgRmxleCxcbiAgSGVhZGluZyxcbiAgU3RhY2ssXG4gIHVzZUNvbG9yTW9kZSxcbiAgdXNlQ29sb3JNb2RlVmFsdWUsXG4gIHVzZURpc2Nsb3N1cmUsXG4gIENvbGxhcHNlLFxuICBJY29uLFxuICBJY29uQnV0dG9uLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xuXG5pbnRlcmZhY2UgTmF2SXRlbSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGhyZWY/OiBzdHJpbmc7XG59XG5cbmNvbnN0IE5BVklHQVRJT05fSVRFTVM6IEFycmF5PE5hdkl0ZW0+ID0gW1xuICB7XG4gICAgbGFiZWw6IFwiSG9tZVwiLFxuICAgIGhyZWY6IFwiL1wiLFxuICB9LFxuICB7XG4gICAgbGFiZWw6IFwiUmVzdW1lXCIsXG4gICAgaHJlZjogXCIvcmVzdW1lXCIsXG4gIH0sXG5dO1xuXG5jb25zdCBEZXNrdG9wTmF2aWdhdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8RmxleCBtYXJnaW5ZPVwiYXV0b1wiIGdhcD17NH0+XG4gICAgICB7TkFWSUdBVElPTl9JVEVNUy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgPExpbmsga2V5PXtpdGVtLmxhYmVsfSB0bz17aXRlbS5ocmVmfT5cbiAgICAgICAgICB7aXRlbS5sYWJlbH1cbiAgICAgICAgPC9MaW5rPlxuICAgICAgKSl9XG4gICAgPC9GbGV4PlxuICApO1xufTtcblxuY29uc3QgTW9iaWxlTmF2aWdhdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U3RhY2tcbiAgICAgIGJnPXt1c2VDb2xvck1vZGVWYWx1ZShcIndoaXRlXCIsIFwiZ3JheS44MDBcIil9XG4gICAgICBkaXNwbGF5PXt7IG1kOiBcIm5vbmVcIiB9fVxuICAgICAgbWI9ezR9XG4gICAgPlxuICAgICAge05BVklHQVRJT05fSVRFTVMubWFwKChuYXZJdGVtKSA9PiAoXG4gICAgICAgIDxNb2JpbGVOYXZJdGVtIGtleT17bmF2SXRlbS5sYWJlbH0gey4uLm5hdkl0ZW19IC8+XG4gICAgICApKX1cbiAgICA8L1N0YWNrPlxuICApO1xufTtcblxuY29uc3QgTW9iaWxlTmF2SXRlbSA9ICh7IGxhYmVsLCBocmVmIH06IE5hdkl0ZW0pID0+IHtcbiAgY29uc3QgeyBpc09wZW4sIG9uVG9nZ2xlIH0gPSB1c2VEaXNjbG9zdXJlKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3RhY2sgc3BhY2luZz17NH0gb25DbGljaz17b25Ub2dnbGV9PlxuICAgICAgPEZsZXhcbiAgICAgICAgcHk9ezJ9XG4gICAgICAgIGFzPXtMaW5rfVxuICAgICAgICB0bz17aHJlZiA/PyBcIiNcIn1cbiAgICAgICAganVzdGlmeT17XCJzcGFjZS1iZXR3ZWVuXCJ9XG4gICAgICAgIGFsaWduPXtcImNlbnRlclwifVxuICAgICAgICBfaG92ZXI9e3tcbiAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgZm9udFdlaWdodD17NjAwfVxuICAgICAgICAgIGNvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImdyYXkuNjAwXCIsIFwiZ3JheS4yMDBcIil9XG4gICAgICAgID5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvRmxleD5cbiAgICA8L1N0YWNrPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2aWdhdGlvbigpIHtcbiAgY29uc3QgeyBjb2xvck1vZGUsIHRvZ2dsZUNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKCk7XG4gIGNvbnN0IHsgaXNPcGVuLCBvblRvZ2dsZSB9ID0gdXNlRGlzY2xvc3VyZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCb3hcbiAgICAgICAgcHg9ezR9XG4gICAgICAgIGJvcmRlckJvdHRvbT17XCIxcHhcIn1cbiAgICAgICAgYm9yZGVyQ29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS4xMDBcIiwgXCJncmF5LjcwMFwiKX1cbiAgICAgICAgbWI9ezh9XG4gICAgICA+XG4gICAgICAgIDxDb250YWluZXIgbWF4Vz1cImNvbnRhaW5lci5sZ1wiPlxuICAgICAgICAgIDxGbGV4IHB5PXs0fSBhbGlnbkl0ZW1zPXtcImNlbnRlclwifSBqdXN0aWZ5Q29udGVudD17XCJzcGFjZS1iZXR3ZWVuXCJ9PlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvXCI+XG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIHNpemU9XCJsZ1wiPlxuICAgICAgICAgICAgICAgICAgXHVEODNEXHVEQzY4XHVEODNDXHVERkZCXHUyMDBEXHVEODNEXHVEQ0JCIHJjc3NkeVxuICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICAgIDxCb3ggYWxpZ25JdGVtcz17XCJjZW50ZXJcIn0+XG4gICAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249e1wicm93XCJ9IHNwYWNpbmc9ezR9PlxuICAgICAgICAgICAgICAgIDxGbGV4IGRpc3BsYXk9e3sgYmFzZTogXCJub25lXCIsIG1kOiBcImZsZXhcIiB9fT5cbiAgICAgICAgICAgICAgICAgIDxEZXNrdG9wTmF2aWdhdGlvbiAvPlxuICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlQ29sb3JNb2RlfVxuICAgICAgICAgICAgICAgICAgaWNvbj17Y29sb3JNb2RlID09PSBcImxpZ2h0XCIgPyA8TW9vbkljb24gLz4gOiA8U3VuSWNvbiAvPn1cbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9e1wiZ2hvc3RcIn1cbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e1wiVG9nZ2xlIENvbG9yIE1vZGVcIn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblRvZ2dsZX1cbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk9e3sgYmFzZTogXCJmbGV4XCIsIG1kOiBcIm5vbmVcIiB9fVxuICAgICAgICAgICAgICAgICAgaWNvbj17XG4gICAgICAgICAgICAgICAgICAgIGlzT3BlbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2VJY29uIHc9ezN9IGg9ezN9IC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEhhbWJ1cmdlckljb24gdz17NX0gaD17NX0gLz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgdmFyaWFudD17XCJnaG9zdFwifVxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17XCJUb2dnbGUgTmF2aWdhdGlvblwifVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgPENvbGxhcHNlIGluPXtpc09wZW59IGFuaW1hdGVPcGFjaXR5PlxuICAgICAgICAgICAgPE1vYmlsZU5hdmlnYXRpb24gLz5cbiAgICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm94PlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBHcmlkLCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IEljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgRmFUd2l0dGVyLCBGYUdpdGh1YiB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBtYXhXPVwiY29udGFpbmVyLmxnXCIgbXk9ezh9PlxuICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PXtcInNwYWNlLWJldHdlZW5cIn0+XG4gICAgICAgIDxUZXh0IGNvbG9yPXtcImdyYXkuNDAwXCJ9IG15PVwiYXV0b1wiPlxuICAgICAgICAgIENvcHlyaWdodCBcdTAwQTkge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gUnlhbiBDYXNzaWR5LiBBbGwgcmlnaHRzXG4gICAgICAgICAgcmVzZXJ2ZWQuXG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPEdyaWQgZGlzcGxheT1cImZsZXhcIiBnYXA9ezR9PlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL3Jjc3NkeVwiPlxuICAgICAgICAgICAgPEljb24gYXM9e0ZhVHdpdHRlcn0gdz17Nn0gaD17Nn0gY29sb3I9e1wiYmx1ZS40MDBcIn0gLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9yY3NzZHlcIj5cbiAgICAgICAgICAgIDxJY29uIGFzPXtGYUdpdGh1Yn0gdz17Nn0gaD17Nn0gLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQm94PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuIiwgImltcG9ydCB7XG4gIEJveCxcbiAgVGV4dCxcbiAgSGVhZGluZyxcbiAgR3JpZCxcbiAgVW5vcmRlcmVkTGlzdCxcbiAgTGlzdEl0ZW0sXG4gIEZsZXgsXG4gIEltYWdlLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQge1xuICBEaUFuZ3VsYXJTaW1wbGUsXG4gIERpSnNCYWRnZSxcbiAgRGlNeXNxbCxcbiAgRGlQaHAsXG4gIERpUmVhY3QsXG4gIERpUmVkaXMsXG4gIERpV29yZHByZXNzLFxufSBmcm9tIFwicmVhY3QtaWNvbnMvZGlcIjtcblxudHlwZSBSZXN1bWVJdGVtID0ge1xuICBwb3NpdGlvbjogc3RyaW5nO1xuICBjb21wYW55OiBzdHJpbmc7XG4gIGR1cmF0aW9uPzogc3RyaW5nO1xuICByZXNwb25zaWJpbGl0aWVzPzogc3RyaW5nW107XG4gIGxvZ28/OiBzdHJpbmc7XG59O1xuXG5jb25zdCBSRVNVTUVfSVRFTVM6IEFycmF5PFJlc3VtZUl0ZW0+ID0gW1xuICB7XG4gICAgcG9zaXRpb246IFwiU2VuaW9yIFNvZnR3YXJlIEVuZ2luZWVyXCIsXG4gICAgY29tcGFueTogXCJIYXBweSBHcm91cFwiLFxuICAgIGR1cmF0aW9uOiBcIkphbnVhcnkgMjAyMSAtIFByZXNlbnRcIixcbiAgICByZXNwb25zaWJpbGl0aWVzOiBbXG4gICAgICBcIlRha2UgcmVzcG9uc2liaWxpdHkgZm9yIHRoZSBkaXJlY3Rpb24gb2YgaW50ZXJuYWwgdG9vbHMgYW5kIG5ldyByZWNydWl0bWVudCB3ZWJzaXRlIHRocm91Z2ggY29udHJpYnV0aW5nIHRvIGNvZGViYXNlIGFuZCBmaXhpbmcgdXJnZW50IGlzc3Vlc1wiLFxuICAgICAgXCJFZHVjYXRlIHRlYW0gbWVtYmVycyBvbiBob3cgdG8gd3JpdGUgY2xlYW4gY29kZSwgc29sdmUgcHJvYmxlbXMgYW5kIGNvbW11bmljYXRlIGVmZmVjdGl2ZWx5XCIsXG4gICAgICBcIkZ1bGZpbGwgRGV2T3BzIHJlcXVpcmVtZW50cyB0aHJvdWdoIGNvbnRpbnVvdXMgaW50ZWdyYXRpb24sIG1vbml0b3JpbmcgYW5kIGxvZ2dpbmdcIixcbiAgICAgIFwiSW50ZXJwcmV0IHJlcXVpcmVtZW50cyBmcm9tIG1hbmFnZW1lbnQsIGFuZCByZWxheSB0byBkZXZlbG9wbWVudCB0ZWFtXCIsXG4gICAgICBcIlBlcmZvcm0gcmVndWxhciBjb2RlIHJldmlld3MgKG9uZSB0byBvbmUpIHRvIGVuc3VyZSBjb2RlIGNvbmZvcm1zIHRvIGludGVybmFsIHN0YW5kYXJkcywgYW5kIGluc3BpcmUgY29uZmlkZW5jZSBpbiB0ZWFtIG1lbWJlcnMgd2hlbiBwcm9ibGVtcyBhcmlzZVwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBwb3NpdGlvbjogXCJTZW5pb3IgV29yZFByZXNzIEVuZ2luZWVyXCIsXG4gICAgY29tcGFueTogXCJUcmlkYXogcy5yLm9cIixcbiAgICBkdXJhdGlvbjogXCJKYW51YXJ5IDIwMTYgLSBPY3RvYmVyIDIwMjBcIixcbiAgICByZXNwb25zaWJpbGl0aWVzOiBbXG4gICAgICBcIlJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyBzb2x1dGlvbnMgdG8gY29tcGxleCBXb3JkUHJlc3MgaXNzdWVzXCIsXG4gICAgICBcIkNvLW9yZGluYXRlIGNsaWVudCBwcm9qZWN0cyB3aXRoIG1hbmFnZW1lbnQsIGFuZCBkZWxlZ2F0ZSBkZXNpZ24gLyBkZXZlbG9wbWVudCB0YXNrcyB0byBpbi1ob3VzZSB0ZWFtXCIsXG4gICAgICBcIkJ1aWxkIGN1c3RvbSB0aGVtZXMgYW5kIHBsdWdpbnMsIG1ha2luZyB1c2Ugb2YgdGhlIGxhdGVzdCB0ZWNobm9sb2dpZXMgYW5kIHRlY2huaXF1ZXMgdG8gYnVpbGQgaGlnaC1wZXJmb3JtaW5nIHdlYnNpdGVzXCIsXG4gICAgICBcIkVkdWNhdGUgdGVhbSBvbiBiZXN0IHByYWN0aWNlcyBpbiBXb3JkUHJlc3MsIGFuZCBkb2N1bWVudCBzdGFuZGFyZCBvcGVyYXRpbmcgcHJvY2VkdXJlcyB0byBpbXByb3ZlIHRlYW0gZWZmaWNpZW5jeVwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBwb3NpdGlvbjogXCJTb2Z0d2FyZSBFbmdpbmVlclwiLFxuICAgIGNvbXBhbnk6IFwiT2NlYW5pYSBVbml2ZXJzaXR5IG9mIE1lZGljaW5lXCIsXG4gICAgZHVyYXRpb246IFwiSnVuZSAyMDE2IC0gTWF5IDIwMTdcIixcbiAgICByZXNwb25zaWJpbGl0aWVzOiBbXG4gICAgICBcIlJld3JpdGUgUEhQIGNvZGViYXNlIHRvIGZpdCB3aXRoIGxhdGVzdCBidXNpbmVzcyByZXF1aXJlbWVudHNcIixcbiAgICAgIFwiT3B0aW1pemUgZGF0YWJhc2UgcXVlcmllcyB0byBvcGVyYXRlIGVmZmljaWVudGx5IG9uIGxhcmdlIGRhdGFzZXRzXCIsXG4gICAgICBcIlN0YW5kYXJkaXNlIGRlc2lnbiBwcmFjdGljZXMgdGhyb3VnaCBlZmZlY3RpdmUgdXNlIG9mIHRoZSBCb290c3RyYXAgQ1NTIGZyYW1ld29ya1wiLFxuICAgICAgXCJBdHRlbmQgcmVndWxhciBjb2RlIHJldmlld3Mgd2l0aCBtYW5hZ2VtZW50IChkYXRhYmFzZSBhZG1pbmlzdHJhdG9yKSB0byBpbXByb3ZlIGtub3dsZWRnZSBvZiBpbmZyYXN0cnVjdHVyZSBhbmQgZGF0YWJhc2VzXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHBvc2l0aW9uOiBcIlNvZnR3YXJlIEVuZ2luZWVyXCIsXG4gICAgY29tcGFueTogXCJCYWxib2EgUGFjaWZpYyBNZWRpYVwiLFxuICAgIGR1cmF0aW9uOiBcIkp1bmUgMjAxNSAtIE1heSAyMDE2XCIsXG4gICAgcmVzcG9uc2liaWxpdGllczogW1xuICAgICAgXCJJbnRlZ3JhdGUgaGlnaC1yaXNrIHBheW1lbnQgc29sdXRpb25zIGFuZCBhZGhlcmUgdG8gUENJIGNvbXBsaWFuY2Ugc3RhbmRhcmRzXCIsXG4gICAgICBcIkNvbnN0cnVjdCBzYWxlcyBmdW5uZWxzIGFuZCBjby1vcmRpbmF0ZSByZXF1aXJlZCBmZWF0dXJlcyB3aXRoIGNvcHl3cml0aW5nIGFuZCBkZXNpZ24gdGVhbVwiLFxuICAgICAgXCJCdWlsZCBhbmQgZGVwbG95IHByb2R1Y3Qgd2Vic2l0ZXMgaW4gYSBoaWdoLXRyYWZmaWMgZW52aXJvbm1lbnQgd2l0aCBtYW55IGNvbmN1cnJlbnQgdXNlcnNcIixcbiAgICAgIFwiQWR2aXNlIG9uIGRpcmVjdGlvbiBvZiBlLWNvbW1lcmNlIGFzc2V0cyBhbmQgbmV3IGZ1bm5lbHNcIixcbiAgICBdLFxuICB9LFxuXTtcblxuY29uc3QgUmVzdW1lSXRlbSA9ICh7XG4gIHBvc2l0aW9uLFxuICBjb21wYW55LFxuICBkdXJhdGlvbixcbiAgcmVzcG9uc2liaWxpdGllcyxcbiAgbG9nbyxcbn06IFJlc3VtZUl0ZW0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEdyaWRcbiAgICAgICAgYm9yZGVyV2lkdGg9XCIxcHhcIlxuICAgICAgICBib3JkZXJSYWRpdXM9XCJsZ1wiXG4gICAgICAgIHA9ezZ9XG4gICAgICAgIGJveFNoYWRvdz1cImJhc2VcIlxuICAgICAgICBnYXA9ezJ9XG4gICAgICAgIGF1dG9GbG93PVwicm93IGRlbnNlXCJcbiAgICAgID5cbiAgICAgICAgPEZsZXhcbiAgICAgICAgICBkaXJlY3Rpb249e1tcImNvbHVtbi1yZXZlcnNlXCIsIFwiY29sdW1uLXJldmVyc2VcIiwgXCJyb3dcIl19XG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9e1wic3BhY2UtYmV0d2VlblwifVxuICAgICAgICA+XG4gICAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIiBzaXplPVwibWRcIj5cbiAgICAgICAgICAgICAge3Bvc2l0aW9ufSwge2NvbXBhbnl9XG4gICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cImxnXCI+e2R1cmF0aW9ufTwvVGV4dD5cbiAgICAgICAgICAgIDxVbm9yZGVyZWRMaXN0PlxuICAgICAgICAgICAgICB7cmVzcG9uc2liaWxpdGllcz8ubWFwKChyZXNwb25zaWJpbGl0eSkgPT4gKFxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbT57cmVzcG9uc2liaWxpdHl9PC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1Vub3JkZXJlZExpc3Q+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEJveD5cbiAgICAgICAgICAgIHtsb2dvICYmIChcbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPXtsb2dvfVxuICAgICAgICAgICAgICAgIGRpc3BsYXk9e3sgYmFzZTogXCJub25lXCIsIG1kOiBcImZsZXhcIiB9fVxuICAgICAgICAgICAgICAgIHdpZHRoPXtcIjEwMHB4XCJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0ZsZXg+XG4gICAgICA8L0dyaWQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXN1bWUoKSB7XG4gIHJldHVybiAoXG4gICAgPEJveD5cbiAgICAgIDxHcmlkIGdhcD17OH0gYXV0b0Zsb3c9XCJyb3cgZGVuc2VcIj5cbiAgICAgICAgPEdyaWQgZ2FwPXs0fSBhdXRvRmxvdz1cInJvdyBkZW5zZVwiPlxuICAgICAgICAgIDxGbGV4PlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIHNpemU9XCJsZ1wiPlxuICAgICAgICAgICAgICAgIFJlc3VtZVxuICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICBFeHBlcmllbmNlZCBzb2Z0d2FyZSBlbmdpbmVlciB3aXRoIDcrIHllYXJzIG9mIGV4cGVyaWVuY2UgaW5cbiAgICAgICAgICAgIGNvbW1lcmNpYWwgc29mdHdhcmUgZGV2ZWxvcG1lbnQuIEluIHByZXZpb3VzIHJvbGVzLCBJXHUyMDE5dmUgYnVpbHRcbiAgICAgICAgICAgIHNvZnR3YXJlIHRoYXQgaGFzIGJlZW4gc2VydmVkIHRvIG1pbGxpb25zIG9mIHVzZXJzLiBJIGJlbGlldmUgbXlcbiAgICAgICAgICAgIGJhY2tncm91bmQgaXMgdW5pcXVlIGFzIEkgbGVhcm5lZCBzb2Z0d2FyZSBkZXZlbG9wbWVudCB1bmRlclxuICAgICAgICAgICAgc3VwZXJ2aXNpb24gZnJvbSBhbiBleHBlcmllbmNlZCBkYXRhYmFzZSBwcm9mZXNzaW9uYWwsIGhhdmluZyBzcGVudFxuICAgICAgICAgICAgbXVjaCBvZiBteSBjYXJlZXIgZml4aW5nIG9sZCwgb3V0ZGF0ZWQgYXBwbGljYXRpb25zIHJhdGhlciB0aGFuXG4gICAgICAgICAgICBncmVlbmZpZWxkIHByb2plY3RzLiBUaGlzIGhhcyBnaXZlbiBtZSBzb2xpZCBmb3VuZGF0aW9ucyBpbiBzb2Z0d2FyZVxuICAgICAgICAgICAgZW5naW5lZXJpbmcuXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGdhcD17NH0gYXV0b0Zsb3c9XCJyb3cgZGVuc2VcIj5cbiAgICAgICAgICA8SGVhZGluZyBhcz1cImgyXCIgc2l6ZT1cIm1kXCI+XG4gICAgICAgICAgICBUZWNobm9sb2dpZXNcbiAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgPEZsZXg+XG4gICAgICAgICAgICA8SWNvbiBhcz17RGlKc0JhZGdlfSB3PXsxMn0gaD17MTJ9IC8+XG4gICAgICAgICAgICA8SWNvbiBhcz17RGlSZWFjdH0gdz17MTJ9IGg9ezEyfSAvPlxuICAgICAgICAgICAgPEljb24gYXM9e0RpQW5ndWxhclNpbXBsZX0gdz17MTJ9IGg9ezEyfSAvPlxuICAgICAgICAgICAgPEljb24gYXM9e0RpUGhwfSB3PXsxMn0gaD17MTJ9IC8+XG4gICAgICAgICAgICA8SWNvbiBhcz17RGlXb3JkcHJlc3N9IHc9ezEyfSBoPXsxMn0gLz5cbiAgICAgICAgICAgIDxJY29uIGFzPXtEaU15c3FsfSB3PXsxMn0gaD17MTJ9IC8+XG4gICAgICAgICAgICA8SWNvbiBhcz17RGlSZWRpc30gdz17MTJ9IGg9ezEyfSAvPlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBnYXA9ezR9IGF1dG9GbG93PVwicm93IGRlbnNlXCI+XG4gICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMlwiIHNpemU9XCJtZFwiPlxuICAgICAgICAgICAgUm9sZXNcbiAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAge1JFU1VNRV9JVEVNUy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxSZXN1bWVJdGVtIHsuLi5pdGVtfSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9Cb3g+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgQm94LCBUZXh0LCBIZWFkaW5nLCBHcmlkLCBCdXR0b24sIEltYWdlIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBOZXdzbGV0dGVyIGZyb20gXCJ+L2NvbXBvbmVudHMvTmV3c2xldHRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEdyaWQgZ2FwPXs0fSBhdXRvRmxvdz1cInJvdyBkZW5zZVwiPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgZGlzcGxheT17XCJmbGV4XCJ9XG4gICAgICAgICAgZmxleERpcmVjdGlvbj17W1wiY29sdW1uLXJldmVyc2VcIiwgXCJjb2x1bW4tcmV2ZXJzZVwiLCBcInJvd1wiXX1cbiAgICAgICAgICBib3JkZXJXaWR0aD1cIjFweFwiXG4gICAgICAgICAgYm9yZGVyUmFkaXVzPVwibGdcIlxuICAgICAgICAgIHA9ezh9XG4gICAgICAgICAgZ2FwPXs0fVxuICAgICAgICAgIGJveFNoYWRvdz1cImJhc2VcIlxuICAgICAgICA+XG4gICAgICAgICAgPEdyaWQgZ2FwPXs0fSBhdXRvRmxvdz1cInJvdyBkZW5zZVwiPlxuICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIHNpemU9XCJsZ1wiPlxuICAgICAgICAgICAgICBIaSwgSSdtIFJ5YW4gQ2Fzc2lkeSBcdUQ4M0RcdURDNEJcdUQ4M0NcdURGRkJcbiAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwibGdcIj5cbiAgICAgICAgICAgICAgSSdtIGEgU2VuaW9yIFNvZnR3YXJlIEVuZ2luZWVyIGF0IEhhcHB5IEdyb3VwLCBzb2x2aW5nIGNvbXBsZXhcbiAgICAgICAgICAgICAgcHJvYmxlbXMgd2l0aCBKYXZhU2NyaXB0ICYgUEhQLiBJJ3ZlIHRyYXZlbGxlZCB0aGUgd29ybGQgd3JpdGluZ1xuICAgICAgICAgICAgICBjb2RlIGZvciB+OCB5ZWFycyBub3csIHZpc2l0aW5nIG1hbnkgZGlmZmVyZW50IGNvdW50cmllcyBpbiB0aGVcbiAgICAgICAgICAgICAgcHJvY2Vzcy5cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cImxnXCIgd2lkdGg9e1wiMTUwcHhcIn0+XG4gICAgICAgICAgICAgIExlYXJuIG1vcmVcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvbWUuanBnXCJcbiAgICAgICAgICAgICAgYWx0PVwiUnlhbiBDYXNzaWR5XCJcbiAgICAgICAgICAgICAgd2lkdGg9e1tcIjYwJVwiLCBcIjYwJVwiLCBcIjQ1MHB4XCJdfVxuICAgICAgICAgICAgICBteD17W1wiYXV0b1wiLCBcImF1dG9cIiwgXCIwXCJdfVxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9e1wiMTAwJVwifVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxOZXdzbGV0dGVyIC8+XG4gICAgICA8L0dyaWQ+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIEZvcm1Db250cm9sLFxuICBGb3JtSGVscGVyVGV4dCxcbiAgRm9ybUxhYmVsLFxuICBHcmlkLFxuICBIZWFkaW5nLFxuICBJbnB1dCxcbiAgU2ltcGxlR3JpZCxcbiAgVGV4dCxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3c2xldHRlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8U2ltcGxlR3JpZFxuICAgICAgY29sdW1ucz17WzEsIDEsIDJdfVxuICAgICAgZ2FwPXs4fVxuICAgICAgYm9yZGVyV2lkdGg9XCIxcHhcIlxuICAgICAgYm9yZGVyUmFkaXVzPVwibGdcIlxuICAgICAgcD17Nn1cbiAgICAgIGJveFNoYWRvdz1cImJhc2VcIlxuICAgID5cbiAgICAgIDxCb3g+XG4gICAgICAgIDxHcmlkIGdhcD17NH0+XG4gICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIHNpemU9XCJtZFwiPlxuICAgICAgICAgICAgR2V0IFdlZWtseSBEZXZlbG9wZXIgTm90ZXMgXHVEODNEXHVEQ0REXG4gICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwibGdcIj5cbiAgICAgICAgICAgIEkgd3JpdGUgYSB3ZWVrbHkgZW1haWwgdGhhdCBjb250YWlucyB0aXBzIGFuZCB0cmlja3MgZm9yIGRldmVsb3BlcnNcbiAgICAgICAgICAgIGxvb2tpbmcgdG8gaW1wcm92ZSB0aGVpciBjb2Rpbmcgc2tpbGxzIGFuZCBjbGltYiB0aGUgY2FyZWVyIGxhZGRlci5cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPFRleHQgZm9udFNpemU9XCJsZ1wiPlxuICAgICAgICAgICAgSSBkcmF3IG9uIG15IGV4cGVyaWVuY2UgYW5kIGtub3dsZWRnZSB0byBwcm92aWRlIHlvdSB3aXRoIHNvbWUgb2ZcbiAgICAgICAgICAgIHRoZSBiZXN0IGFkdmljZSB0byBoZWxwIHlvdSBnZXQgdGhlIG1vc3Qgb3V0IG9mIHdlYiBkZXZlbG9wbWVudC5cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQm94PlxuICAgICAgPEJveD5cbiAgICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgIDxHcmlkIGdhcD17NH0+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgIDxGb3JtTGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+WW91ciBOYW1lPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICAgIDxJbnB1dCBpZD1cIm5hbWVcIiBuYW1lPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgIDxGb3JtTGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+WW91ciBFbWFpbDwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgICA8SW5wdXQgaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIC8+XG4gICAgICAgICAgICAgIDxGb3JtSGVscGVyVGV4dD5JJ2xsIG5ldmVyIHNoYXJlIHlvdXIgZW1haWwuPC9Gb3JtSGVscGVyVGV4dD5cbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJzY3JpYmU8L0J1dHRvbj5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvQm94PlxuICAgIDwvU2ltcGxlR3JpZD5cbiAgKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQs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LG9DQUFDLDhCQUFELE1BQWdCLGtDQUVsQixvQ0FBQyxzQkFBRDtBQUFBLElBQVEsTUFBSztBQUFBLEtBQVM7QUFBQTs7O0FEaERuQixpQkFBaUI7QUFDOUIsU0FDRSwwREFDRSxvQ0FBQyxvQkFBRDtBQUFBLElBQU0sS0FBSztBQUFBLElBQUcsVUFBUztBQUFBLEtBQ3JCLG9DQUFDLG1CQUFEO0FBQUEsSUFDRSxTQUFTO0FBQUEsSUFDVCxlQUFlLENBQUMsa0JBQWtCLGtCQUFrQjtBQUFBLElBQ3BELGFBQVk7QUFBQSxJQUNaLGNBQWE7QUFBQSxJQUNiLEdBQUc7QUFBQSxJQUNILEtBQUs7QUFBQSxJQUNMLFdBQVU7QUFBQSxLQUVWLG9DQUFDLG9CQUFEO0FBQUEsSUFBTSxLQUFLO0FBQUEsSUFBRyxVQUFTO0FBQUEsS0FDckIsb0NBQUMsdUJBQUQ7QUFBQSxJQUFTLElBQUc7QUFBQSxJQUFLLE1BQUs7QUFBQSxLQUFLLDRDQUczQixvQ0FBQyxvQkFBRDtBQUFBLElBQU0sVUFBUztBQUFBLEtBQUssNk1BTXBCLG9DQUFDLHNCQUFEO0FBQUEsSUFBUSxNQUFLO0FBQUEsSUFBSyxPQUFPO0FBQUEsS0FBUyxnQkFJcEMsb0NBQUMsbUJBQUQsTUFDRSxvQ0FBQyxxQkFBRDtBQUFBLElBQ0UsS0FBSTtBQUFBLElBQ0osS0FBSTtBQUFBLElBQ0osT0FBTyxDQUFDLE9BQU8sT0FBTztBQUFBLElBQ3RCLElBQUksQ0FBQyxRQUFRLFFBQVE7QUFBQSxJQUNyQixjQUFjO0FBQUEsUUFJcEIsb0NBQUMsWUFBRDtBQUFBOzs7QU5uQ1Isb0JBQWtDO0FBQzNCLElBQU0sUUFBUSxFQUFFLFFBQVE7QUFDeEIsSUFBTSxTQUFTO0FBQUEsRUFDcEIsUUFBUTtBQUFBLElBQ04sSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFVixpQkFBaUI7QUFBQSxJQUNmLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVYsZ0JBQWdCO0FBQUEsSUFDZCxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
