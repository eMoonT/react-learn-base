const App = () => {
  return (
    <div>
      <div className="h-full border-b border-gray-300">
        <div className="mt-5 px-3 tab-top flex justify-between">
          <div className="left-tab flex items-center space-x-2">
            <button className="px-2 py-2 border border-gray-300 rounded">
              <svg
                height={14}
                width={14}
                className="text-gray-600 fill-current"
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                data-view-component="true"
              >
                <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
              </svg>
            </button>
            <a href="#">
              <svg
                height={30}
                width={30}
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                data-view-component="true"
              >
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg>
            </a>
            <span className="px-2 py-1 rounde text-gray-800 hover:bg-slate-100">
              eMoonT
            </span>
            <span>/</span>
            <span className="px-2 py-1 rounde text-gray-800 font-semibold hover:bg-slate-100">
              statuspage
            </span>
          </div>
          <div className="right-tab flex items-center justify-items-end">
            <div className="input-div w-[350p] flex items-center relative">
              <svg
                height={15}
                width={15}
                className="text-gray-600 fill-current absolute left-3"
                aria-hidden="true"
                viewBox="0 0 16 16"
                data-view-component="true"
              >
                <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
              </svg>
              <input
                type="text"
                className="w-full py-1 px-10 rounded-md border border-gray-200 shadow-xs focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                placeholder="Type to search"
              />
              <span className="text-gray-300 absolute right-8">|</span>
              <svg
                height={16}
                width={16}
                className="text-gray-600 fill-current absolute right-3"
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                data-view-component="true"
              >
                <path d="m6.354 8.04-4.773 4.773a.75.75 0 1 0 1.061 1.06L7.945 8.57a.75.75 0 0 0 0-1.06L2.642 2.206a.75.75 0 0 0-1.06 1.061L6.353 8.04ZM8.75 11.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5Z"></path>
              </svg>
            </div>
            <div className="w-[1px] h-5 bg-gray-200 mx-3 space-x-3"></div>
            <div className="flex items-center space-x-3">
              <div className="px-3 py-2 flex items-center border border-gray-300 rounded-lg cursor-pointer">
                <span>
                  <svg
                    className="text-gray-600 fill-current"
                    height={16}
                    width={16}
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    version="1.1"
                    data-view-component="true"
                  >
                    <path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path>
                  </svg>
                </span>
                <span>
                  <svg
                    className="text-gray-600 fill-current"
                    height={16}
                    width={16}
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    version="1.1"
                    data-view-component="true"
                  >
                    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
                  </svg>
                </span>
              </div>
              <a
                href="#"
                className="px-2 py-2 border border-gray-300 rounded-lg"
              >
                <svg
                  className="text-gray-600 fill-current"
                  aria-hidden="true"
                  height={16}
                  viewBox="0 0 16 16"
                  version="1.1"
                  width={16}
                  data-view-component="true"
                >
                  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="px-2 py-2 border border-gray-300 rounded-lg"
              >
                <svg
                  className="text-gray-600 fill-current"
                  aria-hidden="true"
                  height={16}
                  viewBox="0 0 16 16"
                  version="1.1"
                  width={16}
                  data-view-component="true"
                >
                  <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="px-2 py-2 border border-gray-300 rounded relative"
              >
                <svg
                  className="text-gray-600 fill-current"
                  aria-hidden="true"
                  height={16}
                  viewBox="0 0 16 16"
                  version="1.1"
                  width={16}
                  data-view-component="true"
                >
                  <path d="M2.8 2.06A1.75 1.75 0 0 1 4.41 1h7.18c.7 0 1.333.417 1.61 1.06l2.74 6.395c.04.093.06.194.06.295v4.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-4.5c0-.101.02-.202.06-.295Zm1.61.44a.25.25 0 0 0-.23.152L1.887 8H4.75a.75.75 0 0 1 .6.3L6.625 10h2.75l1.275-1.7a.75.75 0 0 1 .6-.3h2.863L11.82 2.652a.25.25 0 0 0-.23-.152Zm10.09 7h-2.875l-1.275 1.7a.75.75 0 0 1-.6.3h-3.5a.75.75 0 0 1-.6-.3L4.375 9.5H1.5v3.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Z"></path>
                </svg>
                <div className="w-2 h-2 bg-blue-500 rounded-full absolute -top-1 -right-1"></div>
              </a>
              <div className="w-8 h-8 bg-blue-200 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="tab-main mt-5 px-3">
          <ul className="pl-2 pb-4 lg:flex items-center space-x-6">
            <li className="flex items-center space-x-2">
              <svg
                className="text-gray-600 fill-current"
                aria-hidden="true"
                height={16}
                viewBox="0 0 16 16"
                version="1.1"
                width={16}
                data-view-component="true"
              >
                <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
              </svg>
              <a href="#" className="text-black font-semibold">
                Code
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                className="text-gray-400 fill-current"
                aria-hidden="true"
                height={16}
                viewBox="0 0 16 16"
                version="1.1"
                width={16}
                data-view-component="true"
              >
                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
              </svg>
              <a href="#" className="text-gray-800">
                Issues
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                className="text-gray-400 fill-current"
                aria-hidden="true"
                height={16}
                viewBox="0 0 16 16"
                version="1.1"
                width={16}
                data-view-component="true"
              >
                <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
              </svg>
              <a href="#" className="text-gray-800">
                Pull requests
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                className="text-gray-400 fill-current"
                aria-hidden="true"
                height={16}
                viewBox="0 0 16 16"
                version="1.1"
                width={16}
                class="octicon octicon-play UnderlineNav-octicon d-none d-sm-inline"
              >
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path>
              </svg>
              <a href="#" className="text-gray-800">
                Actions
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                className="text-gray-400 fill-current"
                aria-hidden="true"
                height={16}
                viewBox="0 0 16 16"
                version="1.1"
                width={16}
                data-view-component="true"
              >
                <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></path>
              </svg>
              <a href="#" className="text-gray-800">
                Projects
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                className="text-gray-400 fill-current"
                aria-hidden="true"
                height={16}
                viewBox="0 0 16 16"
                version="1.1"
                width={16}
                data-view-component="true"
              >
                <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path>
              </svg>
              <a href="#" className="text-gray-800">
                Wiki
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                className="text-gray-400 fill-current"
                aria-hidden="true"
                height={16}
                viewBox="0 0 16 16"
                version="1.1"
                width={16}
                data-view-component="true"
              >
                <path d="M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
              </svg>
              <a href="#" className="text-gray-800">
                Security
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                className="text-gray-400 fill-current"
                aria-hidden="true"
                height={16}
                viewBox="0 0 16 16"
                version="1.1"
                width={16}
                data-view-component="true"
              >
                <path d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Zm14.28 2.53-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06 4.28 9.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path>
              </svg>
              <a href="#" className="text-gray-800">
                Insights
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                className="text-gray-400 fill-current"
                aria-hidden="true"
                height={16}
                viewBox="0 0 16 16"
                version="1.1"
                width={16}
                data-view-component="true"
              >
                <path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path>
              </svg>
              <a href="#" className="text-gray-800">
                Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="info py-5 lg:w-[1250px] md:w-[650px] sm:w-[250px] flex justify-between border-b border-gray-300">
          <div className="flex items-center space-x-3">
            <div className="avg w-6 h-6 rounded-full bg-blue-300"></div>
            <h2 className="text-xl font-semibold">statuspage</h2>
            <span className="text-[0.75rem] text-gray-500 border border-gray-500 px-2 py-0.5 rounded-xl">
              public
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="pin flex py-1 px-3 items-center space-x-2 rounded border border-gray-300 bg-gray-100 cursor-pointer">
              <svg
                className="text-gray-600 fill-current"
                aria-hidden="true"
                height={16}
                viewBox="0 0 16 16"
                version="1.1"
                width={16}
                data-view-component="true"
              >
                <path d="m11.294.984 3.722 3.722a1.75 1.75 0 0 1-.504 2.826l-1.327.613a3.089 3.089 0 0 0-1.707 2.084l-.584 2.454c-.317 1.332-1.972 1.8-2.94.832L5.75 11.311 1.78 15.28a.749.749 0 1 1-1.06-1.06l3.969-3.97-2.204-2.204c-.968-.968-.5-2.623.832-2.94l2.454-.584a3.08 3.08 0 0 0 2.084-1.707l.613-1.327a1.75 1.75 0 0 1 2.826-.504ZM6.283 9.723l2.732 2.731a.25.25 0 0 0 .42-.119l.584-2.454a4.586 4.586 0 0 1 2.537-3.098l1.328-.613a.25.25 0 0 0 .072-.404l-3.722-3.722a.25.25 0 0 0-.404.072l-.613 1.328a4.584 4.584 0 0 1-3.098 2.537l-2.454.584a.25.25 0 0 0-.119.42l2.731 2.732Z"></path>
              </svg>
              <span className="text-gray-800 text-xs">Pin</span>
            </div>
            <div className="watch flex py-1 px-2 items-center space-x-2 rounded border border-gray-300 bg-gray-100 cursor-pointer">
              <svg
                className="text-gray-600 fill-current"
                aria-hidden="true"
                height={16}
                viewBox="0 0 16 16"
                version="1.1"
                width={16}
                data-view-component="true"
              >
                <path d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"></path>
              </svg>
              <span className="text-gray-800 text-xs">Watch</span>
              <span className="w-4 h-4 flex items-center justify-center text-xs rounded-full bg-gray-300">
                1
              </span>
              <span className="">
                <svg
                  t="1702546120613"
                  className="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="4220"
                  width={16}
                  height={16}
                >
                  <path d="M256 384l256 256 256-256z" p-id="4221"></path>
                </svg>
              </span>
            </div>
            <div className="fork flex items-center">
              <div className="flex py-1 px-2 items-center space-x-2 rounded rounded-r-none border border-gray-300 bg-gray-100 cursor-pointer">
                <svg
                  className="text-gray-600 fill-current"
                  aria-hidden="true"
                  height={16}
                  viewBox="0 0 16 16"
                  version="1.1"
                  width={16}
                  data-view-component="true"
                >
                  <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
                </svg>
                <span className="text-gray-800 text-xs">Fork</span>
                <span className="w-4 h-4 flex items-center justify-center text-xs rounded-full bg-gray-300 text-gray-500">
                  0
                </span>
              </div>
              <span className="py-1 px-2 flex items-center justify-center rounded rounded-l-none border border-l-0 border-gray-300 bg-gray-100 cursor-pointer">
                <svg
                  t="1702546120613"
                  className="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="4220"
                  width={16}
                  height={16}
                >
                  <path d="M256 384l256 256 256-256z" p-id="4221"></path>
                </svg>
              </span>
            </div>
            <div className="star flex items-center">
              <div className="flex py-1 px-2 items-center space-x-2 rounded rounded-r-none border border-gray-300 bg-gray-100 cursor-pointer">
                <svg
                  className="text-gray-600 fill-current"
                  aria-hidden="true"
                  height={16}
                  viewBox="0 0 16 16"
                  version="1.1"
                  width={16}
                  data-view-component="true"
                >
                  <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                </svg>
                <span className="text-gray-800 text-xs">Star</span>
                <span className="w-4 h-4 flex items-center justify-center text-xs rounded-full bg-gray-300 text-gray-700">
                  0
                </span>
              </div>
              <span className="py-1 px-2 flex items-center justify-center rounded rounded-l-none border border-l-0 border-gray-300 bg-gray-100 cursor-pointer">
                <svg
                  t="1702546120613"
                  className="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="4220"
                  width={16}
                  height={16}
                >
                  <path d="M256 384l256 256 256-256z" p-id="4221"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="h-30 w-30 bg-orange-200"></div>
      </div>
      <div className="main-container flex justify-center">
        <div className="main py-6 w-[1250px] flex">
          <div className="main-left w-[76%]">
            <div className="main-top flex justify-between">
              <div className="title flex space-x-3">
                <div className="py-1 px-2 flex items-center space-x-2 rounded bg-gray-100 border border-gray-300 shadow-xs hover:bg-gray-200 translate duration-300">
                  <svg
                    className="text-gray-500 fill-current"
                    aria-hidden="true"
                    focusable="false"
                    role="img"
                    viewBox="0 0 16 16"
                    width={16}
                    height={16}
                    fill="currentColor"
                  >
                    <path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path>
                  </svg>
                  <span className="text-sm">main</span>
                  <span className="py-1 px-2 flex items-center justify-center">
                    <svg
                      t="1702546120613"
                      className="icon text-gray-500 fill-current"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="4220"
                      width={16}
                      height={16}
                    >
                      <path d="M256 384l256 256 256-256z" p-id="4221"></path>
                    </svg>
                  </span>
                </div>
                <div className="px-1 py-1 flex items-center space-x-1 hover:bg-gray-100 rounded-md transition duration-300">
                  <svg
                    className="text-gray-500 fill-current"
                    aria-hidden="true"
                    focusable="false"
                    role="img"
                    viewBox="0 0 16 16"
                    width={16}
                    height={16}
                    fill="currentColor"
                  >
                    <path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path>
                  </svg>
                  <span className="font-semibold text-sm">1</span>
                  <span className="text-gray-500 text-sm">Branch</span>
                </div>
                <div className="px-1 py-1 flex items-center space-x-1 hover:bg-gray-100 rounded-md transition duration-300">
                  <svg
                    className="text-gray-500 fill-current"
                    aria-hidden="true"
                    focusable="false"
                    role="img"
                    viewBox="0 0 16 16"
                    width={16}
                    height={16}
                    fill="currentColor"
                  >
                    <path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path>
                  </svg>
                  <span className="font-semibold text-sm">0</span>
                  <span className="text-gray-500 text-sm">Tags</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-[160p] flex items-center relative">
                  <svg
                    height={15}
                    width={15}
                    className="text-gray-600 fill-current absolute left-3"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    data-view-component="true"
                  >
                    <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
                  </svg>
                  <input
                    type="text"
                    className="px-10 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"
                    placeholder="Go to file"
                  />
                  <div className="flex justify-center items-center w-6 h-6 absolute text-gray-700 right-5 rounded-lg bg-gray-100">
                    <span className="">t</span>
                  </div>
                </div>
                <div className="px-2 py-1 flex items-center rounded border bg-gray-100 hover:bg-gray-200 transition duration-300">
                  <span>Add file</span>
                  <span className="py-1 px-2 flex items-center justify-center">
                    <svg
                      t="1702546120613"
                      className="icon text-gray-500 fill-current"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="4220"
                      width={16}
                      height={16}
                    >
                      <path d="M256 384l256 256 256-256z" p-id="4221"></path>
                    </svg>
                  </span>
                </div>
                <div className="px-2 py-1 flex items-center space-x-2 rounded-md border bg-green-700 hover:bg-green-800 transition duration-300">
                  <svg
                    className="text-white fill-current"
                    aria-hidden="true"
                    focusable="false"
                    role="img"
                    viewBox="0 0 16 16"
                    width={16}
                    height={16}
                    fill="currentColor"
                  >
                    <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
                  </svg>
                  <span className="text-white">Code</span>
                  <span className="flex items-center justify-center">
                    <svg
                      t="1702546120613"
                      className="icon text-white fill-current"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="4220"
                      width={16}
                      height={16}
                    >
                      <path d="M256 384l256 256 256-256z" p-id="4221"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <ul className="flex-1 mt-5 rounded-md">
              <li className="w-full py-3 px-4 flex items-center justify-between rounded rounded-b-none bg-gray-100 hover:bg-gray-200 transition duration-300 border border-gray-300 border-b-0">
                <div className="flex items-center space-x-2">
                  <span className="h-5 w-5 bg-blue-300 rounded-full"></span>
                  <span className="font-semibold">eMoonT</span>
                  <a
                    href="#"
                    className="text-gray-600 text-sm hover:underline hover:decoration-blue-600 hover:text-blue-600"
                  >
                    [Automated] Update Health Check Logs
                  </a>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-gray-600 text-sm hover:underline hover:decoration-blue-600 hover:text-blue-600">
                    1d01cca
                  </span>
                  <span className="h-0.5 w-0.5 bg-gray-600 rounded-full"></span>
                  <span className="text-gray-600 text-sm">yesterday</span>
                  <div className="px-2 py-2 flex items-center space-x-2 rounded-md hover:bg-gray-200 transition duration-300">
                    <svg
                      className="text-gray-600 fill-current"
                      aria-hidden="true"
                      focusable="false"
                      role="img"
                      viewBox="0 0 16 16"
                      width={16}
                      height={16}
                      fill="currentColor"
                    >
                      <path d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z"></path>
                    </svg>
                    <span className="text-xs text-gray-800">9,300 Commits</span>
                  </div>
                </div>
              </li>
              <li className="w-full py-3 px-3 flex items-center hover:bg-gray-100 transition duration-300 border border-gray-300 border-b-0">
                <div className="w-4/12 flex items-center space-x-2">
                  <svg
                    className="text-blue-300 fill-crrent"
                    aria-hidden="true"
                    focusable="false"
                    role="img"
                    viewBox="0 0 16 16"
                    width={16}
                    height={16}
                    fill="currentColor"
                  >
                    <path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path>
                  </svg>
                  <span className="text-md text-gray-900">
                    .github/.workflows
                  </span>
                </div>
                <span className="w-6/12 truncate content-start text-sm text-gray-500 hover:text-blue-600 hover:underline">
                  Stop pushing status updates in the origin repository (#10)
                </span>
                <span className="w-2/12 flex justify-end text-gray-500">
                  2 years ago
                </span>
              </li>
              <li className="w-full py-3 px-3 flex items-center hover:bg-gray-100 transition duration-300 border border-gray-300 border-b-0">
                <div className="w-4/12 flex items-center space-x-2">
                  <svg
                    className="text-blue-300 fill-crrent"
                    aria-hidden="true"
                    focusable="false"
                    role="img"
                    viewBox="0 0 16 16"
                    width={16}
                    height={16}
                    fill="currentColor"
                  >
                    <path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path>
                  </svg>
                  <span className="text-md text-gray-900">logs</span>
                </div>
                <span className="w-6/12 content-start text-sm text-gray-500 hover:text-blue-600 hover:underline">
                  [Automated] Update Health Check Logs
                </span>
                <span className="w-2/12 flex justify-end text-gray-500">
                  2 years ago
                </span>
              </li>
              <li className="w-full py-3 px-3 flex items-center hover:bg-gray-100 transition duration-300 border border-gray-300 border-b-0">
                <div className="w-4/12 flex space-x-2">
                  <svg
                    className="text-gray-600 fill-crrent"
                    aria-hidden="true"
                    focusable="false"
                    role="img"
                    viewBox="0 0 16 16"
                    width={16}
                    height={16}
                    fill="currentColor"
                  >
                    <path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path>
                  </svg>
                  <span className="text-md text-gray-900">.gitignore</span>
                </div>
                <span className="w-6/12 text-sm text-gray-500 hover:text-blue-600 hover:underline">
                  Create .gitignore
                </span>
                <span className="w-2/12 flex justify-end text-gray-500">
                  2 years ago
                </span>
              </li>
              <li className="w-full py-3 px-3 flex items-center hover:bg-gray-100 transition duration-300 rounded rounded-t-none border border-gray-300">
                <div className="w-4/12 flex space-x-2">
                  <svg
                    className="text-gray-600 fill-crrent"
                    aria-hidden="true"
                    focusable="false"
                    role="img"
                    viewBox="0 0 16 16"
                    width={16}
                    height={16}
                    fill="currentColor"
                  >
                    <path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path>
                  </svg>
                  <span className="text-sm text-gray-900">README.md</span>
                </div>
                <span className="w-6/12 text-sm text-gray-500 hover:text-blue-600 hover:underline">
                  Spelling (#16)
                </span>
                <span className="w-2/12 flex justify-end text-gray-500">
                  2 years ago
                </span>
              </li>
            </ul>
            <div className="document mt-5">
              <div className="px-4 pt-3 flex justify-between rounded-md rounded-b-none border border-gray-300">
                <div className="d-left flex items-center space-x-6 ">
                  <span className="pb-3 flex items-center space-x-2 border-b-2 border-orange-400 hover:bg-gray-300 transition duration-300">
                    <svg
                      className="text-gray-600 fill-current"
                      aria-hidden="true"
                      focusable="false"
                      role="img"
                      viewBox="0 0 16 16"
                      width={16}
                      height={16}
                      fill="currentColor"
                    >
                      <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path>
                    </svg>
                    <span className="d-title font-semibold text-sm">
                      README
                    </span>
                  </span>
                  <span className="pb-3 flex items-center space-x-2">
                    <svg
                      className="text-gray-600 fill-current"
                      aria-hidden="true"
                      focusable="false"
                      role="img"
                      viewBox="0 0 16 16"
                      width={16}
                      height={16}
                      fill="currentColor"
                    >
                      <path d="M8.75.75V2h.985c.304 0 .603.08.867.231l1.29.736c.038.022.08.033.124.033h2.234a.75.75 0 0 1 0 1.5h-.427l2.111 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.006.005-.01.01-.045.04c-.21.176-.441.327-.686.45C14.556 10.78 13.88 11 13 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L12.178 4.5h-.162c-.305 0-.604-.079-.868-.231l-1.29-.736a.245.245 0 0 0-.124-.033H8.75V13h2.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.5V3.5h-.984a.245.245 0 0 0-.124.033l-1.289.737c-.265.15-.564.23-.869.23h-.162l2.112 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.016.015-.045.04c-.21.176-.441.327-.686.45C4.556 10.78 3.88 11 3 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L2.178 4.5H1.75a.75.75 0 0 1 0-1.5h2.234a.249.249 0 0 0 .125-.033l1.288-.737c.265-.15.564-.23.869-.23h.984V.75a.75.75 0 0 1 1.5 0Zm2.945 8.477c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327Zm-10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327Z"></path>
                    </svg>
                    <span className="text-sm text-gray-800">ISC License</span>
                  </span>
                </div>
                <div className="pb-3 d-right flex items-center space-x-4">
                  <svg
                    className="text-gray-600 fill-current"
                    aria-hidden="true"
                    focusable="false"
                    role="img"
                    viewBox="0 0 16 16"
                    width={16}
                    height={16}
                    fill="currentColor"
                  >
                    <path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"></path>
                  </svg>
                  <svg
                    className="text-gray-600 fill-current"
                    aria-hidden="true"
                    focusable="false"
                    role="img"
                    viewBox="0 0 16 16"
                    width={16}
                    height={16}
                    fill="currentColor"
                  >
                    <path d="M5.75 2.5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5Zm0 5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5Zm0 5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5ZM2 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM2 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path>
                  </svg>
                </div>
              </div>
              <div className="w-full h-[200px] border border-t-0 border-gray-300 rounded-md rounded-t-none"></div>
            </div>
          </div>
          <div className="main-right w-[24%] px-5">
            <div className="r-1 py-3">
              <div className="flex justify-between">
                <span className="font-semibold">About</span>
                <svg
                  className="text-gray-600 fill-current"
                  aria-label="Edit repository metadata"
                  role="img"
                  height={16}
                  viewBox="0 0 16 16"
                  version="1.1"
                  width={16}
                  data-view-component="true"
                >
                  <path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path>
                </svg>
              </div>
              <span className="my-3 text-gray-600 italic">
                No description, website, or topics provided.
              </span>
              <ul className="mt-3 pb-3 space-y-2 border-b">
                <li className="flex items-center space-x-2">
                  <svg
                    className="text-gray-500 fill-current"
                    aria-hidden="true"
                    height={16}
                    viewBox="0 0 16 16"
                    version="1.1"
                    width={16}
                    data-view-component="true"
                  >
                    <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path>
                  </svg>
                  <span className="text-gray-500">Readme</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="text-gray-500 fill-current"
                    aria-hidden="true"
                    height={16}
                    viewBox="0 0 16 16"
                    version="1.1"
                    width={16}
                    data-view-component="true"
                  >
                    <path d="M8.75.75V2h.985c.304 0 .603.08.867.231l1.29.736c.038.022.08.033.124.033h2.234a.75.75 0 0 1 0 1.5h-.427l2.111 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.006.005-.01.01-.045.04c-.21.176-.441.327-.686.45C14.556 10.78 13.88 11 13 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L12.178 4.5h-.162c-.305 0-.604-.079-.868-.231l-1.29-.736a.245.245 0 0 0-.124-.033H8.75V13h2.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.5V3.5h-.984a.245.245 0 0 0-.124.033l-1.289.737c-.265.15-.564.23-.869.23h-.162l2.112 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.016.015-.045.04c-.21.176-.441.327-.686.45C4.556 10.78 3.88 11 3 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L2.178 4.5H1.75a.75.75 0 0 1 0-1.5h2.234a.249.249 0 0 0 .125-.033l1.288-.737c.265-.15.564-.23.869-.23h.984V.75a.75.75 0 0 1 1.5 0Zm2.945 8.477c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327Zm-10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327Z"></path>
                  </svg>
                  <span className="text-gray-500">ISC License</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="text-gray-500 fill-current"
                    text="gray"
                    aria-hidden="true"
                    height={16}
                    viewBox="0 0 16 16"
                    version="1.1"
                    width={16}
                    data-view-component="true"
                  >
                    <path d="M6 2c.306 0 .582.187.696.471L10 10.731l1.304-3.26A.751.751 0 0 1 12 7h3.25a.75.75 0 0 1 0 1.5h-2.742l-1.812 4.528a.751.751 0 0 1-1.392 0L6 4.77 4.696 8.03A.75.75 0 0 1 4 8.5H.75a.75.75 0 0 1 0-1.5h2.742l1.812-4.529A.751.751 0 0 1 6 2Z"></path>
                  </svg>
                  <span className="text-gray-500">Activity</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="text-gray-500 fill-current"
                    aria-hidden="true"
                    height={16}
                    viewBox="0 0 16 16"
                    version="1.1"
                    width={16}
                    data-view-component="true"
                  >
                    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                  </svg>
                  <span className="text-gray-500">0 stars</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="text-gray-500 fill-current"
                    aria-hidden="true"
                    height={16}
                    viewBox="0 0 16 16"
                    version="1.1"
                    width={16}
                    data-view-component="true"
                  >
                    <path d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"></path>
                  </svg>
                  <span className="text-gray-500">0 watching</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="text-gray-500 fill-current"
                    aria-hidden="true"
                    height={16}
                    viewBox="0 0 16 16"
                    version="1.1"
                    width={16}
                    data-view-component="true"
                  >
                    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
                  </svg>
                  <span className="text-gray-500">0 forks</span>
                </li>
              </ul>
            </div>
            <div className="r-2 flex flex-col">
              <span className="text-lg font-semibold">Releases</span>
              <span className="mt-3 text-xs text-gray-500">No releases published</span>
              <a href="#" className="text-sm pb-3 border-b border-gray-300 underline decoration-blue-600 text-blue-600">Create a new release</a>
            </div>
            <div className="r-3 mt-2 flex flex-col">
              <span className="text-lg font-semibold">Packages</span>
              <span className="mt-3 text-xs text-gray-500">No packages published</span>
              <a href="#" className="text-sm pb-3 border-b border-gray-300 hover:underline decoration-blue-600 text-blue-600">Publish your first package</a>
            </div>
            <div className="r-4 mt-2 pb-3 border-b flex flex-col">
              <div className="space-x-1 flex items-center">
                <span className="text-lg font-semibold" >
                  Contributors
                  </span>
                  <span className="h-5 w-5 flex items-center justify-center text-xs rounded-full bg-gray-100">5</span>
              </div>
              <div className="flex mt-2 items-start space-x-2">
                <span className="w-7 h-7 rounded-full bg-blue-300"></span>
                <span className="w-7 h-7 rounded-full bg-orange-300"></span>
                <span className="w-7 h-7 rounded-full bg-red-300"></span>
                <span className="w-7 h-7 rounded-full bg-green-300"></span>
                <span className="w-7 h-7 rounded-full bg-violet-300"></span>
              </div>
            </div>
            <div className="r-5 mt-2">
              <span className="text-lg font-semibold">Language</span>
              <div className="py-3 flex justify-start space-x-1">
                <span className="h-2 w-[42%] bg-orange-300 rounded-lg rounded-r-none"></span>
                <span className="h-2 w-[30%] bg-yellow-300 rounded-lg rounded-l-none rounded-r-none"></span>
                <span className="h-2 w-[20%] bg-red-300 rounded-lg rounded-l-none rounded-r-none"></span>
                <span className="h-2 w-[18%] bg-green-300 rounded-lg rounded-l-none"></span>
              </div>
              <div className="flex flex-wrap">
                <div className="flex items-center space-x-2">
                  <span className="h-2 w-2 bg-orange-300 rounded-full"></span>
                  <span className="font-semibold text-sm">JavaScript <span className="font-normal text-sm text-gray-500">43%</span></span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="h-2 w-2 bg-yellow-300 rounded-full"></span>
                  <span className="font-semibold text-sm">CSS<span className="font-normal text-sm text-gray-500">30%</span></span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="h-2 w-2 bg-red-300 rounded-full"></span>
                  <span className="font-semibold text-sm">HTML<span className="font-normal text-sm text-gray-500">20%</span></span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="h-2 w-2 bg-green-300 rounded-full"></span>
                  <span className="font-semibold text-sm">Shell<span className="font-normal text-sm text-gray-500">18%</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer py-8 flex justify-center items-center space-x-3">
        <span className="h-4 w-4 bg-blue-300 rounded-full"></span>
        <span className="text-sm text-gray-600">@2023 Github,Inc.</span>
        <a href="#" className="text-sm text-gray-600 hover:underline hover:text-blue-600 hover:decoration-blue-300">Terms</a>
        <a href="#" className="text-sm text-gray-600 hover:underline hover:text-blue-600 hover:decoration-blue-300">Privacy</a>
        <a href="#" className="text-sm text-gray-600 hover:underline hover:text-blue-600 hover:decoration-blue-300">Security</a>
        <a href="#" className="text-sm text-gray-600 hover:underline hover:text-blue-600 hover:decoration-blue-300">Status</a>
        <a href="#" className="text-sm text-gray-600 hover:underline hover:text-blue-600 hover:decoration-blue-300">Docs</a>
        <a href="#" className="text-sm text-gray-600 hover:underline hover:text-blue-600 hover:decoration-blue-300">Contact</a>
        <a href="#" className="text-sm text-gray-600 hover:underline hover:text-blue-600 hover:decoration-blue-300">Manage Cookies</a>
        <a href="#" className="text-sm text-gray-600 hover:underline hover:text-blue-600 hover:decoration-blue-300">Do not share my personal information</a>
      </div>
    </div>
  );
};

export default App;
