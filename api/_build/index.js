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
  }), /* @__PURE__ */ React.createElement(import_react.IconButton, {
    onClick: toggleColorMode,
    icon: colorMode === "light" ? /* @__PURE__ */ React.createElement(import_icons.MoonIcon, null) : /* @__PURE__ */ React.createElement(import_icons.SunIcon, null),
    variant: "ghost",
    "aria-label": "Toggle Color Mode"
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
function Resume() {
  return /* @__PURE__ */ React.createElement(import_react5.Box, null, /* @__PURE__ */ React.createElement(import_react5.Grid, {
    gap: 8,
    autoFlow: "row dense"
  }, /* @__PURE__ */ React.createElement(import_react5.Grid, {
    gap: 4,
    autoFlow: "row dense"
  }, /* @__PURE__ */ React.createElement(import_react5.Heading, {
    as: "h1",
    size: "lg"
  }, "Resume"), /* @__PURE__ */ React.createElement(import_react5.Text, null, "Experienced software engineer with 7+ years of experience in commercial software development. In previous roles, I\u2019ve built software that has been served to millions of users. I believe my background is unique as I learned software development under supervision from an experienced database professional, having spent much of my career fixing old, outdated applications rather than greenfield projects. This has given me solid foundations in software engineering.")), /* @__PURE__ */ React.createElement(import_react5.Grid, {
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
  }, "Roles"), /* @__PURE__ */ React.createElement(import_react5.Grid, {
    borderWidth: "1px",
    borderRadius: "lg",
    p: 6,
    boxShadow: "base",
    gap: 2,
    autoFlow: "row dense"
  }, /* @__PURE__ */ React.createElement(import_react5.Heading, {
    as: "h3",
    size: "md"
  }, "Senior Software Engineer, Happy Group"), /* @__PURE__ */ React.createElement(import_react5.Text, {
    fontSize: "lg"
  }, "Jan 2021 - Present"), /* @__PURE__ */ React.createElement(import_react5.UnorderedList, null, /* @__PURE__ */ React.createElement(import_react5.ListItem, null, "Take responsibility for the direction of internal tools and new recruitment website through contributing to codebase and fixing urgent issues"), /* @__PURE__ */ React.createElement(import_react5.ListItem, null, "Educate team members on how to write clean code, solve problems and communicate effectively"), /* @__PURE__ */ React.createElement(import_react5.ListItem, null, "Fulfill DevOps requirements through continuous integration, monitoring and logging"), /* @__PURE__ */ React.createElement(import_react5.ListItem, null, "Interpret requirements from management, and relay to development team"), /* @__PURE__ */ React.createElement(import_react5.ListItem, null, "Perform regular code reviews (one to one) to ensure code conforms to internal standards, and inspire confidence in team members when problems arise"))))));
}

// route-module:/Users/ryancassidy/Dropbox/My Mac (Ryans-MBP)/Documents/projects/rcssdy-blog/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
init_react();
var import_react7 = __toModule(require("@chakra-ui/react"));
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react7.Box, {
    display: "flex",
    flexDirection: ["column-reverse", "column-reverse", "row"],
    borderWidth: "1px",
    borderRadius: "lg",
    p: 8,
    gap: 4,
    boxShadow: "base"
  }, /* @__PURE__ */ React.createElement(import_react7.Grid, {
    gap: 4,
    autoFlow: "row dense"
  }, /* @__PURE__ */ React.createElement(import_react7.Heading, {
    as: "h1",
    size: "xl"
  }, "Hi, I'm Ryan Cassidy \u{1F44B}\u{1F3FB}"), /* @__PURE__ */ React.createElement(import_react7.Text, {
    fontSize: "lg"
  }, "I'm a Senior Software Engineer at Happy Group, solving complex problems with JavaScript & PHP. I've travelled the world writing code for ~8 years now, visiting many different countries in the process."), /* @__PURE__ */ React.createElement(import_react7.Button, {
    size: "lg",
    width: "150px"
  }, "Learn More")), /* @__PURE__ */ React.createElement(import_react7.Box, null, /* @__PURE__ */ React.createElement(import_react7.Image, {
    src: "/assets/me.jpg",
    alt: "Ryan Cassidy",
    width: ["60%", "60%", "450px"],
    mx: ["auto", "auto", "0"],
    borderRadius: "100%"
  }))));
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9yeWFuY2Fzc2lkeS9Ecm9wYm94L015IE1hYyAoUnlhbnMtTUJQKS9Eb2N1bWVudHMvcHJvamVjdHMvcmNzc2R5LWJsb2cvYXBwL3Jvb3QudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL05hdmlnYXRpb24udHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL0Zvb3Rlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9yeWFuY2Fzc2lkeS9Ecm9wYm94L015IE1hYyAoUnlhbnMtTUJQKS9Eb2N1bWVudHMvcHJvamVjdHMvcmNzc2R5LWJsb2cvYXBwL3JvdXRlcy9yZXN1bWUudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvcnlhbmNhc3NpZHkvRHJvcGJveC9NeSBNYWMgKFJ5YW5zLU1CUCkvRG9jdW1lbnRzL3Byb2plY3RzL3Jjc3NkeS1ibG9nL2FwcC9yb3V0ZXMvaW5kZXgudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG4iLCAiLyoqXG4gKiByZW1peCB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY2xpZW50ID0gcmVxdWlyZSgnLi9jbGllbnQnKTtcbnZhciBzZXJ2ZXIgPSByZXF1aXJlKCcuL3NlcnZlcicpO1xudmFyIHBsYXRmb3JtID0gcmVxdWlyZSgnLi9wbGF0Zm9ybScpO1xuXG5cblxuT2JqZWN0LmtleXMoY2xpZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsaWVudFtrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMoc2VydmVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlcltrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMocGxhdGZvcm0pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGxhdGZvcm1ba107IH1cblx0fSk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvcnlhbmNhc3NpZHkvRHJvcGJveC9NeSBNYWMgKFJ5YW5zLU1CUCkvRG9jdW1lbnRzL3Byb2plY3RzL3Jjc3NkeS1ibG9nL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9yeWFuY2Fzc2lkeS9Ecm9wYm94L015IE1hYyAoUnlhbnMtTUJQKS9Eb2N1bWVudHMvcHJvamVjdHMvcmNzc2R5LWJsb2cvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9yeWFuY2Fzc2lkeS9Ecm9wYm94L015IE1hYyAoUnlhbnMtTUJQKS9Eb2N1bWVudHMvcHJvamVjdHMvcmNzc2R5LWJsb2cvYXBwL3JvdXRlcy9yZXN1bWUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9yeWFuY2Fzc2lkeS9Ecm9wYm94L015IE1hYyAoUnlhbnMtTUJQKS9Eb2N1bWVudHMvcHJvamVjdHMvcmNzc2R5LWJsb2cvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIi4vYXNzZXRzLmpzb25cIjtcbmV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgXCJyb290XCI6IHtcbiAgICBpZDogXCJyb290XCIsXG4gICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICBwYXRoOiBcIlwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUwXG4gIH0sXG4gIFwicm91dGVzL3Jlc3VtZVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3Jlc3VtZVwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcInJlc3VtZVwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxXG4gIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMlxuICB9XG59OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBDaGFrcmFQcm92aWRlciwgQ29udGFpbmVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvTmF2aWdhdGlvblwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9jb21wb25lbnRzL0Zvb3RlclwiO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogXCJSeWFuIENhc3NpZHkgfCBTb2Z0d2FyZSBFbmdpbmVlclwiIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8Q2hha3JhUHJvdmlkZXI+XG4gICAgICAgICAgPE5hdmlnYXRpb24gLz5cbiAgICAgICAgICA8Q29udGFpbmVyIG1heFc9XCJjb250YWluZXIubGdcIj5cbiAgICAgICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG4iLCAiaW1wb3J0IHtcbiAgQ2hldnJvbkRvd25JY29uLFxuICBDbG9zZUljb24sXG4gIEhhbWJ1cmdlckljb24sXG4gIE1vb25JY29uLFxuICBTdW5JY29uLFxufSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBUZXh0LFxuICBCdXR0b24sXG4gIENvbnRhaW5lcixcbiAgRmxleCxcbiAgSGVhZGluZyxcbiAgU3RhY2ssXG4gIHVzZUNvbG9yTW9kZSxcbiAgdXNlQ29sb3JNb2RlVmFsdWUsXG4gIHVzZURpc2Nsb3N1cmUsXG4gIENvbGxhcHNlLFxuICBJY29uLFxuICBJY29uQnV0dG9uLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xuXG5pbnRlcmZhY2UgTmF2SXRlbSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGhyZWY/OiBzdHJpbmc7XG59XG5cbmNvbnN0IE5BVklHQVRJT05fSVRFTVM6IEFycmF5PE5hdkl0ZW0+ID0gW1xuICB7XG4gICAgbGFiZWw6IFwiSG9tZVwiLFxuICAgIGhyZWY6IFwiL1wiLFxuICB9LFxuICB7XG4gICAgbGFiZWw6IFwiUmVzdW1lXCIsXG4gICAgaHJlZjogXCIvcmVzdW1lXCIsXG4gIH0sXG5dO1xuXG5jb25zdCBEZXNrdG9wTmF2aWdhdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8RmxleCBtYXJnaW5ZPVwiYXV0b1wiIGdhcD17NH0+XG4gICAgICB7TkFWSUdBVElPTl9JVEVNUy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgPExpbmsga2V5PXtpdGVtLmxhYmVsfSB0bz17aXRlbS5ocmVmfT5cbiAgICAgICAgICB7aXRlbS5sYWJlbH1cbiAgICAgICAgPC9MaW5rPlxuICAgICAgKSl9XG4gICAgPC9GbGV4PlxuICApO1xufTtcblxuY29uc3QgTW9iaWxlTmF2aWdhdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U3RhY2tcbiAgICAgIGJnPXt1c2VDb2xvck1vZGVWYWx1ZShcIndoaXRlXCIsIFwiZ3JheS44MDBcIil9XG4gICAgICBkaXNwbGF5PXt7IG1kOiBcIm5vbmVcIiB9fVxuICAgICAgbWI9ezR9XG4gICAgPlxuICAgICAge05BVklHQVRJT05fSVRFTVMubWFwKChuYXZJdGVtKSA9PiAoXG4gICAgICAgIDxNb2JpbGVOYXZJdGVtIGtleT17bmF2SXRlbS5sYWJlbH0gey4uLm5hdkl0ZW19IC8+XG4gICAgICApKX1cbiAgICA8L1N0YWNrPlxuICApO1xufTtcblxuY29uc3QgTW9iaWxlTmF2SXRlbSA9ICh7IGxhYmVsLCBocmVmIH06IE5hdkl0ZW0pID0+IHtcbiAgY29uc3QgeyBpc09wZW4sIG9uVG9nZ2xlIH0gPSB1c2VEaXNjbG9zdXJlKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3RhY2sgc3BhY2luZz17NH0gb25DbGljaz17b25Ub2dnbGV9PlxuICAgICAgPEZsZXhcbiAgICAgICAgcHk9ezJ9XG4gICAgICAgIGFzPXtMaW5rfVxuICAgICAgICB0bz17aHJlZiA/PyBcIiNcIn1cbiAgICAgICAganVzdGlmeT17XCJzcGFjZS1iZXR3ZWVuXCJ9XG4gICAgICAgIGFsaWduPXtcImNlbnRlclwifVxuICAgICAgICBfaG92ZXI9e3tcbiAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgZm9udFdlaWdodD17NjAwfVxuICAgICAgICAgIGNvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImdyYXkuNjAwXCIsIFwiZ3JheS4yMDBcIil9XG4gICAgICAgID5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvRmxleD5cblxuICAgICAgey8qIDxDb2xsYXBzZSBpbj17aXNPcGVufSBhbmltYXRlT3BhY2l0eSBzdHlsZT17eyBtYXJnaW5Ub3A6ICcwIWltcG9ydGFudCcgfX0+XG4gICAgICAgIDxTdGFja1xuICAgICAgICAgIG10PXsyfVxuICAgICAgICAgIHBsPXs0fVxuICAgICAgICAgIGJvcmRlckxlZnQ9ezF9XG4gICAgICAgICAgYm9yZGVyU3R5bGU9eydzb2xpZCd9XG4gICAgICAgICAgYm9yZGVyQ29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKCdncmF5LjIwMCcsICdncmF5LjcwMCcpfVxuICAgICAgICAgIGFsaWduPXsnc3RhcnQnfT5cbiAgICAgICAgICB7Y2hpbGRyZW4gJiZcbiAgICAgICAgICAgIGNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IChcbiAgICAgICAgICAgICAgPExpbmsga2V5PXtjaGlsZC5sYWJlbH0gcHk9ezJ9IGhyZWY9e2NoaWxkLmhyZWZ9PlxuICAgICAgICAgICAgICAgIHtjaGlsZC5sYWJlbH1cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L0NvbGxhcHNlPiAqL31cbiAgICA8L1N0YWNrPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2aWdhdGlvbigpIHtcbiAgY29uc3QgeyBjb2xvck1vZGUsIHRvZ2dsZUNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKCk7XG4gIGNvbnN0IHsgaXNPcGVuLCBvblRvZ2dsZSB9ID0gdXNlRGlzY2xvc3VyZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCb3hcbiAgICAgICAgcHg9ezR9XG4gICAgICAgIGJvcmRlckJvdHRvbT17XCIxcHhcIn1cbiAgICAgICAgYm9yZGVyQ29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS4xMDBcIiwgXCJncmF5LjcwMFwiKX1cbiAgICAgICAgbWI9ezh9XG4gICAgICA+XG4gICAgICAgIDxDb250YWluZXIgbWF4Vz1cImNvbnRhaW5lci5sZ1wiPlxuICAgICAgICAgIDxGbGV4IHB5PXs0fSBhbGlnbkl0ZW1zPXtcImNlbnRlclwifSBqdXN0aWZ5Q29udGVudD17XCJzcGFjZS1iZXR3ZWVuXCJ9PlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvXCI+XG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIHNpemU9XCJsZ1wiPlxuICAgICAgICAgICAgICAgICAgXHVEODNEXHVEQzY4XHVEODNDXHVERkZCXHUyMDBEXHVEODNEXHVEQ0JCIHJjc3NkeVxuICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICAgIDxCb3ggYWxpZ25JdGVtcz17XCJjZW50ZXJcIn0+XG4gICAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249e1wicm93XCJ9IHNwYWNpbmc9ezR9PlxuICAgICAgICAgICAgICAgIDxGbGV4IGRpc3BsYXk9e3sgYmFzZTogXCJub25lXCIsIG1kOiBcImZsZXhcIiB9fT5cbiAgICAgICAgICAgICAgICAgIDxEZXNrdG9wTmF2aWdhdGlvbiAvPlxuICAgICAgICAgICAgICAgIDwvRmxleD5cblxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblRvZ2dsZX1cbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk9e3sgYmFzZTogXCJmbGV4XCIsIG1kOiBcIm5vbmVcIiB9fVxuICAgICAgICAgICAgICAgICAgaWNvbj17XG4gICAgICAgICAgICAgICAgICAgIGlzT3BlbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2VJY29uIHc9ezN9IGg9ezN9IC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEhhbWJ1cmdlckljb24gdz17NX0gaD17NX0gLz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgdmFyaWFudD17XCJnaG9zdFwifVxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17XCJUb2dnbGUgTmF2aWdhdGlvblwifVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlQ29sb3JNb2RlfVxuICAgICAgICAgICAgICAgICAgaWNvbj17Y29sb3JNb2RlID09PSBcImxpZ2h0XCIgPyA8TW9vbkljb24gLz4gOiA8U3VuSWNvbiAvPn1cbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9e1wiZ2hvc3RcIn1cbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e1wiVG9nZ2xlIENvbG9yIE1vZGVcIn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDxDb2xsYXBzZSBpbj17aXNPcGVufSBhbmltYXRlT3BhY2l0eT5cbiAgICAgICAgICAgIDxNb2JpbGVOYXZpZ2F0aW9uIC8+XG4gICAgICAgICAgPC9Db2xsYXBzZT5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgR3JpZCwgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IEZhVHdpdHRlciwgRmFHaXRodWIgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgbWF4Vz1cImNvbnRhaW5lci5sZ1wiIG15PXs4fT5cbiAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD17XCJzcGFjZS1iZXR3ZWVuXCJ9PlxuICAgICAgICA8VGV4dCBjb2xvcj17XCJncmF5LjQwMFwifSBteT1cImF1dG9cIj5cbiAgICAgICAgICBDb3B5cmlnaHQgXHUwMEE5IHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IFJ5YW4gQ2Fzc2lkeS4gQWxsIHJpZ2h0c1xuICAgICAgICAgIHJlc2VydmVkLlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxHcmlkIGRpc3BsYXk9XCJmbGV4XCIgZ2FwPXs0fT5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9yY3NzZHlcIj5cbiAgICAgICAgICAgIDxJY29uIGFzPXtGYVR3aXR0ZXJ9IHc9ezZ9IGg9ezZ9IGNvbG9yPXtcImJsdWUuNDAwXCJ9IC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcmNzc2R5XCI+XG4gICAgICAgICAgICA8SWNvbiBhcz17RmFHaXRodWJ9IHc9ezZ9IGg9ezZ9IC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0JveD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cbiIsICJpbXBvcnQge1xuICBCb3gsXG4gIFRleHQsXG4gIEhlYWRpbmcsXG4gIEdyaWQsXG4gIFVub3JkZXJlZExpc3QsXG4gIExpc3RJdGVtLFxuICBTaW1wbGVHcmlkLFxuICBGbGV4LFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQge1xuICBEaUFuZ3VsYXJTaW1wbGUsXG4gIERpSnNCYWRnZSxcbiAgRGlNeXNxbCxcbiAgRGlQaHAsXG4gIERpUmVhY3QsXG4gIERpUmVkaXMsXG4gIERpV29yZHByZXNzLFxufSBmcm9tIFwicmVhY3QtaWNvbnMvZGlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzdW1lKCkge1xuICByZXR1cm4gKFxuICAgIDxCb3g+XG4gICAgICA8R3JpZCBnYXA9ezh9IGF1dG9GbG93PVwicm93IGRlbnNlXCI+XG4gICAgICAgIDxHcmlkIGdhcD17NH0gYXV0b0Zsb3c9XCJyb3cgZGVuc2VcIj5cbiAgICAgICAgICA8SGVhZGluZyBhcz1cImgxXCIgc2l6ZT1cImxnXCI+XG4gICAgICAgICAgICBSZXN1bWVcbiAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICBFeHBlcmllbmNlZCBzb2Z0d2FyZSBlbmdpbmVlciB3aXRoIDcrIHllYXJzIG9mIGV4cGVyaWVuY2UgaW5cbiAgICAgICAgICAgIGNvbW1lcmNpYWwgc29mdHdhcmUgZGV2ZWxvcG1lbnQuIEluIHByZXZpb3VzIHJvbGVzLCBJXHUyMDE5dmUgYnVpbHRcbiAgICAgICAgICAgIHNvZnR3YXJlIHRoYXQgaGFzIGJlZW4gc2VydmVkIHRvIG1pbGxpb25zIG9mIHVzZXJzLiBJIGJlbGlldmUgbXlcbiAgICAgICAgICAgIGJhY2tncm91bmQgaXMgdW5pcXVlIGFzIEkgbGVhcm5lZCBzb2Z0d2FyZSBkZXZlbG9wbWVudCB1bmRlclxuICAgICAgICAgICAgc3VwZXJ2aXNpb24gZnJvbSBhbiBleHBlcmllbmNlZCBkYXRhYmFzZSBwcm9mZXNzaW9uYWwsIGhhdmluZyBzcGVudFxuICAgICAgICAgICAgbXVjaCBvZiBteSBjYXJlZXIgZml4aW5nIG9sZCwgb3V0ZGF0ZWQgYXBwbGljYXRpb25zIHJhdGhlciB0aGFuXG4gICAgICAgICAgICBncmVlbmZpZWxkIHByb2plY3RzLiBUaGlzIGhhcyBnaXZlbiBtZSBzb2xpZCBmb3VuZGF0aW9ucyBpbiBzb2Z0d2FyZVxuICAgICAgICAgICAgZW5naW5lZXJpbmcuXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGdhcD17NH0gYXV0b0Zsb3c9XCJyb3cgZGVuc2VcIj5cbiAgICAgICAgICA8SGVhZGluZyBhcz1cImgyXCIgc2l6ZT1cIm1kXCI+XG4gICAgICAgICAgICBUZWNobm9sb2dpZXNcbiAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgPEZsZXg+XG4gICAgICAgICAgICA8SWNvbiBhcz17RGlKc0JhZGdlfSB3PXsxMn0gaD17MTJ9IC8+XG4gICAgICAgICAgICA8SWNvbiBhcz17RGlSZWFjdH0gdz17MTJ9IGg9ezEyfSAvPlxuICAgICAgICAgICAgPEljb24gYXM9e0RpQW5ndWxhclNpbXBsZX0gdz17MTJ9IGg9ezEyfSAvPlxuICAgICAgICAgICAgPEljb24gYXM9e0RpUGhwfSB3PXsxMn0gaD17MTJ9IC8+XG4gICAgICAgICAgICA8SWNvbiBhcz17RGlXb3JkcHJlc3N9IHc9ezEyfSBoPXsxMn0gLz5cbiAgICAgICAgICAgIDxJY29uIGFzPXtEaU15c3FsfSB3PXsxMn0gaD17MTJ9IC8+XG4gICAgICAgICAgICA8SWNvbiBhcz17RGlSZWRpc30gdz17MTJ9IGg9ezEyfSAvPlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBnYXA9ezR9IGF1dG9GbG93PVwicm93IGRlbnNlXCI+XG4gICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMlwiIHNpemU9XCJtZFwiPlxuICAgICAgICAgICAgUm9sZXNcbiAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgIGJvcmRlcldpZHRoPVwiMXB4XCJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cImxnXCJcbiAgICAgICAgICAgIHA9ezZ9XG4gICAgICAgICAgICBib3hTaGFkb3c9XCJiYXNlXCJcbiAgICAgICAgICAgIGdhcD17Mn1cbiAgICAgICAgICAgIGF1dG9GbG93PVwicm93IGRlbnNlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SGVhZGluZyBhcz1cImgzXCIgc2l6ZT1cIm1kXCI+XG4gICAgICAgICAgICAgIFNlbmlvciBTb2Z0d2FyZSBFbmdpbmVlciwgSGFwcHkgR3JvdXBcbiAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwibGdcIj5KYW4gMjAyMSAtIFByZXNlbnQ8L1RleHQ+XG4gICAgICAgICAgICA8VW5vcmRlcmVkTGlzdD5cbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgIFRha2UgcmVzcG9uc2liaWxpdHkgZm9yIHRoZSBkaXJlY3Rpb24gb2YgaW50ZXJuYWwgdG9vbHMgYW5kIG5ld1xuICAgICAgICAgICAgICAgIHJlY3J1aXRtZW50IHdlYnNpdGUgdGhyb3VnaCBjb250cmlidXRpbmcgdG8gY29kZWJhc2UgYW5kIGZpeGluZ1xuICAgICAgICAgICAgICAgIHVyZ2VudCBpc3N1ZXNcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgIEVkdWNhdGUgdGVhbSBtZW1iZXJzIG9uIGhvdyB0byB3cml0ZSBjbGVhbiBjb2RlLCBzb2x2ZSBwcm9ibGVtc1xuICAgICAgICAgICAgICAgIGFuZCBjb21tdW5pY2F0ZSBlZmZlY3RpdmVseVxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgRnVsZmlsbCBEZXZPcHMgcmVxdWlyZW1lbnRzIHRocm91Z2ggY29udGludW91cyBpbnRlZ3JhdGlvbixcbiAgICAgICAgICAgICAgICBtb25pdG9yaW5nIGFuZCBsb2dnaW5nXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICBJbnRlcnByZXQgcmVxdWlyZW1lbnRzIGZyb20gbWFuYWdlbWVudCwgYW5kIHJlbGF5IHRvIGRldmVsb3BtZW50XG4gICAgICAgICAgICAgICAgdGVhbVxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgUGVyZm9ybSByZWd1bGFyIGNvZGUgcmV2aWV3cyAob25lIHRvIG9uZSkgdG8gZW5zdXJlIGNvZGVcbiAgICAgICAgICAgICAgICBjb25mb3JtcyB0byBpbnRlcm5hbCBzdGFuZGFyZHMsIGFuZCBpbnNwaXJlIGNvbmZpZGVuY2UgaW4gdGVhbVxuICAgICAgICAgICAgICAgIG1lbWJlcnMgd2hlbiBwcm9ibGVtcyBhcmlzZVxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgPC9Vbm9yZGVyZWRMaXN0PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgIDwvQm94PlxuICApO1xufVxuIiwgImltcG9ydCB7IEJveCwgVGV4dCwgSGVhZGluZywgR3JpZCwgQnV0dG9uLCBJbWFnZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Qm94XG4gICAgICAgIGRpc3BsYXk9e1wiZmxleFwifVxuICAgICAgICBmbGV4RGlyZWN0aW9uPXtbXCJjb2x1bW4tcmV2ZXJzZVwiLCBcImNvbHVtbi1yZXZlcnNlXCIsIFwicm93XCJdfVxuICAgICAgICBib3JkZXJXaWR0aD1cIjFweFwiXG4gICAgICAgIGJvcmRlclJhZGl1cz1cImxnXCJcbiAgICAgICAgcD17OH1cbiAgICAgICAgZ2FwPXs0fVxuICAgICAgICBib3hTaGFkb3c9XCJiYXNlXCJcbiAgICAgID5cbiAgICAgICAgPEdyaWQgZ2FwPXs0fSBhdXRvRmxvdz1cInJvdyBkZW5zZVwiPlxuICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDFcIiBzaXplPVwieGxcIj5cbiAgICAgICAgICAgIEhpLCBJJ20gUnlhbiBDYXNzaWR5IFx1RDgzRFx1REM0Qlx1RDgzQ1x1REZGQlxuICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cImxnXCI+XG4gICAgICAgICAgICBJJ20gYSBTZW5pb3IgU29mdHdhcmUgRW5naW5lZXIgYXQgSGFwcHkgR3JvdXAsIHNvbHZpbmcgY29tcGxleFxuICAgICAgICAgICAgcHJvYmxlbXMgd2l0aCBKYXZhU2NyaXB0ICYgUEhQLiBJJ3ZlIHRyYXZlbGxlZCB0aGUgd29ybGQgd3JpdGluZ1xuICAgICAgICAgICAgY29kZSBmb3IgfjggeWVhcnMgbm93LCB2aXNpdGluZyBtYW55IGRpZmZlcmVudCBjb3VudHJpZXMgaW4gdGhlXG4gICAgICAgICAgICBwcm9jZXNzLlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8QnV0dG9uIHNpemU9XCJsZ1wiIHdpZHRoPXtcIjE1MHB4XCJ9PlxuICAgICAgICAgICAgTGVhcm4gTW9yZVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9XCIvYXNzZXRzL21lLmpwZ1wiXG4gICAgICAgICAgICBhbHQ9XCJSeWFuIENhc3NpZHlcIlxuICAgICAgICAgICAgd2lkdGg9e1tcIjYwJVwiLCBcIjYwJVwiLCBcIjQ1MHB4XCJdfVxuICAgICAgICAgICAgbXg9e1tcImF1dG9cIiwgXCJhdXRvXCIsIFwiMFwiXX1cbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz17XCIxMDAlXCJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxRQUFRLFFBQVE7QUFJcEIsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsU0FBUztBQUFBLE1BQ3RDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtB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
