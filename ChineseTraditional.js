module.exports = {
  // List
  // https://emzi0767.gl-pages.emzi0767.dev/discord-emoji/discordEmojiMap-canary.json
  genshinVersions: {
    "1": {"1.0": {},"1.1": {},"1.2": {},"1.3": {},"1.4": {},"1.5": {},"1.6": {}},
    "2": {"2.0": {},"2.1": {},"2.2": {},"2.3": {},"2.4": {}, "2.5": {}, "2.6": {}, "2.7": {}, "2.8": {}},
    "3": {"3.0": {},"3.1": {},"3.2": {},"3.3": {},"3.4": {}, "3.5": {}, "3.6": {}, "3.7": {}, "3.8": {}},
  },
  genshinLatestVersions: {
    "version": "3.0", "image": "https://cdn.discordapp.com/attachments/814486266618970162/1012062259029229679/2022-08-24_combined_banner.png"
  },
  makerUserId:"358320066770501632",
  discordEmbedLengthLimit: 10,
  contentsName: "Contents", // Name of field
  contentsNameSelection: "\uD83D\uDD33",
  contentsNameDeselection: "▫️",

  displayAll: "All",
  displayNone: "None",
  displayTotal: "總祈願",
  displayGrandTotal: "Grand Total",
  displayAverageShorthand: "avg.",
  displayOtherItems: "Other",
  displayBannerName: {
    "Character Event Banner": "角色活動祈願",
    "Weapon Event Banner": "武器活動祈願",
    "Permanent Banner": "常駐祈願",
    "Novice Banner": "新手祈願",
  },
  displayWeaponType: {
    "Character": "角色",
    "Weapon": "武器",
  },
  
  rarity5StarEmoji: "⋆⋆⋆⋆⋆",
  rarity5StarName: "五星",
  rarity4StarEmoji: "⋆⋆⋆⋆",
  rarity4StarName: "四星",
  rarity3StarEmoji: "⋆⋆⋆",
  rarity3StarName: "三星",
  refreshName: "刷新", 
  refreshEmoji: "🔄",
  statusSuccessName: "成功",
  statusSuccessEmoji: "✅",
  statusErrorName: "錯誤",
  statusErrorEmoji: "❌",
  statusLoadingName: "加載中",
  statusLoadingEmoji: "📂",
  statusCheckingName: "檢查中",
  statusCheckingEmoji: "⏳",
  statusProcessingName: "處理中...",
  statusProcessingEmoji: "⏳",
  statusLoadedEmoji: "✅",
  statusLoadedName: "已加載",
  statusLoadingEmoji: "⏳",
  statusLoadingName: "加載中",
  statusLoadEmoji: "❌",
  statusLoadName: "沒有加載",

  urlImageError: "https://cdn.discordapp.com/attachments/814486266618970162/940599883658842122/error_1.png",
  urlImage5Star: "https://cdn.discordapp.com/attachments/814486266618970162/940801560898850907/Final_5_Star.png",
  urlImage4Star: "https://cdn.discordapp.com/attachments/814486266618970162/940801559669923940/Final_4_Star.png",
  urlImageTally: "https://cdn.discordapp.com/attachments/814486266618970162/859426718754275399/Wish-Tally---Community.png",
  urlExportConvertor: "https://docs.google.com/spreadsheets/d/1lXGo_pKxKmTzd9pg1b1gr6Fa-zfcM2ZQd0EnFfzg8Dk/edit",
  urlDiscordInvite: "https://discord.gg/CKuJSbtndV",
  urlGoogleWishTallyAddon: "https://workspace.google.com/marketplace/app/wish_tally/791037722195",
  urlGoogleSheet: "https://docs.google.com/spreadsheets/u/0/",
  // output message
  replaceCodeURL: "[URL]",
  replaceCodeTitle: "[TITLE]",
  replaceCodeProjectName: "[PROJECT_NAME]",
  replaceCodeFileType: "[FILE_TYPE]",
  replaceCodeStatus: "[STATUS]",
  replaceCodeRank: "[RANK]",
  replaceCodeCommandName: "[COMMAND_NAME]",
  replaceCodeEmoji: "[EMOJI]",
  replaceCodeStatusEmoji: "[EMOJI_STATUS]",
  replaceCodeAccountId: "[ACCOUNT_ID]",
  replaceCodeAccountsMax: "[ACCOUNTS_MAX]",
  replaceCodeUserId: "[USER_ID]",
  replaceCodeCommandDescription: "[COMMAND_DESCRIPTION]",
  replaceCodeLanguage: "[LANGUAGE]",
  replaceCodeParameter: "[PARAMETER]",
  replaceCodeDate: "[DATE]",
  replaceCodeDocumentVersion: "[DOCUMENT_VERSION]",
  replaceCodeGenshinVersion: "[GENSHIN_VERSION]",
  replaceCodeAttemptIndex: "[ATTEMPTS_INDEX]",
  replaceCodeAttemptMax: "[ATTEMPTS_MAX]",
  replaceCodeUserId: "[USER_ID]",
  replaceCodeValue:"[VALUE]",
  replaceCodePercentage:"[PERCENTAGE]",
  outputContent: "[COMMAND_NAME]|[EMOJI_STATUS]|For <@[USER_ID]> |[LANGUAGE]|[PARAMETER]|[COMMAND_DESCRIPTION] [DATE]",

  latestVersionCustomId: "[LOAD_LATEST_VERSION]",
  latestVersionName: "最新版本",
  latestVersionEmoji: "🔎",
  latestVersionTitle: "[EMOJI] 原神版本 [GENSHIN_VERSION]",
  // ping Command
  replaceCodeBotName: "[BOT_NAME]",
  pingMessage: ":wave: [BOT_NAME] 我還活著",
  // last-update Command
  lastUpdateMessageError: "請等待社區緩存加載，狀態： [STATUS]",
  lastUpdateMessageException: "錯誤。 無法加載社區緩存數據: [STATUS]",
  lastUpdateName: "最後更新",
  lastUpdateTitle: "社區文檔最後更新摘要",
  lastUpdateEmoji: "⏲️",
  lastUpdateCustomId: "[LOAD_LAST_UPDATE]",
  lastUpdateDocumentTitle: "社區V[DOCUMENT_VERSION]版.X",

  lastUpdateStatusCommunityAccounts: "社區賬戶文件",
  lastUpdateStatusLanguagePadding: 18,
  lastUpdateStatusDocumentPadding: 16,
  lastUpdateStatusDocument: "已加載文檔",
  lastUpdateStatusDocumentAccount: "刷新賬戶",
  lastUpdateStatusDocumentCache: "刷新緩存",
  lastUpdateStatusDocumentWishes: "刷新卡池",
  lastUpdateStatusCommunityPadding: 15,
  lastUpdateStatusItemsByBanner: "卡池上的項目",
  lastUpdateStatusAccounts: "賬戶",
  lastUpdateStatusCharacterBannerPity: "保底",
  lastUpdateStatusDatePadding: 5,
  lastUpdateStatusStartDate: "開始",
  lastUpdateStatusEndDate: "結束",
  lastUpdateStatusSummaryPadding: 14,
  lastUpdateStatusDuration: "時長",
  lastUpdateStatusAttempts: "嘗試",
  lastUpdateStatusMaxAccounts: "最多賬戶",
  lastUpdateStatusTotalWishes: "總祈願",
  lastUpdateStatusCurrentUpdates: "檢查賬戶",
  lastUpdateStatusHour: "小時",
  lastUpdateStatusHours: "小時",
  lastUpdateStatusAnd: "和",
  lastUpdateStatusMinute: "分鐘",
  lastUpdateStatusMinutes: "分鐘",
  lastUpdateStatusAgo: "以前",
  /*
   * account Command
   */
  accountEmoji: "🔑",
  accountCustomId: "[LOAD_ACCOUNT]",
  accountName: "賬戶",
  accountTitle: "[EMOJI] 賬戶",
  accountDescriptionFound: "感謝您對Wish Tally社區貢獻, 目前有[ACCOUNTS_MAX]個賬戶的數據.\n\n這裡是專屬於您的選項。",
  accountDescriptionNotFound: "抱歉，我們找不到您的Wish Tally賬戶, 有 [ACCOUNTS_MAX] 個賬戶可用，但沒有一個是連結到您的Discord賬戶。\n\n請訪問幫助頁面瞭解如何為Wish Tally社區作出貢獻。\n\n如果您最近在ModMail上共享您的賬戶，你則需要等待工作人員檢查您的文檔。",
  accountDescriptionNotLoadedAccount: "機械人最近清除了緩存，很快會刷新賬戶資訊。目前所有按鈕也被啓用，但這些命令仍然需要連接到您的Wish Tally賬戶。",
  accountDescriptionLayout: "\n> [EMOJI][COMMAND_NAME] - [COMMAND_DESCRIPTION]",
  accountDescriptionRank: "顯示您在每個社區文檔之間的總祈願，並顯示您的平均保底等級。",
  accountDescriptionWish: "按等級顯示您的祈願貢獻，有助於瞭解哪個Genshin版本在社區中受歡迎。",
  accountDescriptionPity: "從您的文檔中提取您最近的保底，無需截屏即可向人們展示您的祈願。",
  accountDescriptionRate: "在「角色活動卡池」中顯示限時角色的所有勝率。",
  /*
   * rank Command
   */
  rankEmoji: "🏆",
  rankCommunityEmoji: "🌎",
  rankCustomId: "[LOAD_RANK]",
  rankName: "職級",
  rankAccountTitle: "賬戶匯總",
  rankTitle: "職級匯總",
  rankDescription: "個人職級是您使用Wish Tally文檔中的數據進行的職級。 社區職級是所有賬戶的平均值，這意味著您的職級越低越好。 ",
  rankCommunityTitle: "[EMOJI] 社區職級",
  rankPersonalTitle: "[EMOJI] 個人職級",
  rankNoWishes: "在這個版本中沒有任何祈願。",
  /*
   * rank-wish Command
   */
  rankWishEmoji: "✨",
  rankWishCustomId: "[LOAD_RANK_WISH]",
  rankWishName: "祈願",
  rankWishLimit: 15,
  rankWishGenshinVersionLimit: 5,
  rankWishGenshinVersionSameLimit: 2,
  rankWishLimitPadding: 2,
  rankWishSameTotalLimit: 3,
  rankWishSameTotalMessage: "__已隱藏的 [STATUS] [RANK] 賬戶__",
  rankWishTitle: "祈願職級",
  rankWishNotReadyMessage: "祈願賬戶數據尚未加載，請再試",
  rankWishLoadedMessage: "按祈願職級已成功加載",
  rankWishYouEmoji: "👈",
  rankWishRarity4StarEmoji: "4⭐",
  rankWishRarity5StarEmoji: "5⭐",
  rankWishSelectVersionDefaultPlaceholderForAll: "所有社區數據",
  rankWishRankTitle: "Wish Tally社區版本",
  rankWishRankGenshinTitle: "願神版本",
  rankWishDocumentTitle: "Wish Tally社區V[DOCUMENT_VERSION]版.X",
  rankWishSelectVersionAllId: "[SELECT_RANK_WISH_VERSION_ALL]",
  rankWishSelectBannerIndexId: "[SELECT_RANK_WISH_BANNER_INDEX]",
  rankWishSelectVersionIndexId: "[SELECT_RANK_WISH_VERSION_INDEX]",
  rankWishMessageSuccessSelect: "在卡池之間導航",
  rankWishMessageError: "遇到錯誤, 再試一次",

  checkCommunityAccountMessageError: "請等待社區賬戶表加載, 狀態: [STATUS]",
  // finding account only show for error
  findingAccountName: "尋找賬戶",
  findingAccountEmoji: "🔎",
  findingAccountMessageNotFound: "錯誤！無法從社區賬戶中找到您的賬戶詳細信息\n如果您尚未加入社區請轉到幫助頁面瞭解如何共享您的Wish Tally文檔，如果您最近有青燈社區更新。",
  findingAccountMessageException: "錯誤! 無法從社區文檔中提取數據 `[DOCUMENT_VERSION]`版.",
  findingAccountMessageError: "錯誤無法找到社區賬戶表",

  displayRankMessageError: "錯誤無法找到社區文檔 `[DOCUMENT_VERSION]`版.",
  displayRankMessageNotFound: "社區文檔 `[DOCUMENT_VERSION]`版, 還沒有您的賬戶詳細信息. 您的賬戶位置為 [ACCOUNT_ID]， 而有 [ACCOUNTS_MAX] 個賬戶可用，請等待社區更新。",
  displayRankMessageException: "錯誤！無法從社區中提取數據 ",
  /*
   * pity Command
   */
  pityEmoji: "🧮",
  pityCustomId: "[LOAD_PITY]",
  pityName: "保底",
  pityMessageError: "加載文檔時錯誤",
  pityMessageLoading: "加載文檔 [ATTEMPTS_INDEX]/[ATTEMPTS_MAX] 個嘗試。",
  pityMessageUnableLoad: "錯誤！無法加載您的文檔，請稍後再試。",
  pityMessageUnableFind: "錯誤！無法從文檔中找到「檢查器保底」 表。",
  pityMessageLoadingPity: "加載「檢查器保底」表數據 [ATTEMPTS_INDEX]/[ATTEMPTS_MAX] 個嘗試。",
  pityMessageUnablePityExtract: "從「檢查器保底」表中提取錯誤完全失敗，稍後再試。",
  pityMessagePitySheetOld: "您的文檔「檢查器保底」表已過期，請檢查 <#836651770100842576>.",
  pityMessagePitySheetSuccess: "從您的文件表現出保底",
  pityCurrentWishNumber: "當前的第__個祈願",
  pityBackCustomId: "[LOAD_PITY_BACK]",
  pityNextCustomId: "[LOAD_PITY_NEXT]",
  pityBackEmoji: "⭐", // Back
  pityBackTitle: "⭐⭐⭐⭐⭐", // Back
  pityBackNoEarned: "⭐⭐⭐⭐⭐ - 找不到五星", // Back
  pityBackName: "五星", // Back
  pityNextEmoji: "⭐", // Next
  pityNextTitle: "⭐⭐⭐⭐", // Next
  pityNextNoEarned: "⭐⭐⭐⭐ - 找不到四星", // Next
  pityNextName: "四星", // Next
  /*
   * rate Command
   */
  rateEmoji: "🎯",
  rateCustomId: "[LOAD_RATE]",
  rateVersionCustomId: "[LOAD_RATE_VERSION]",
  rateName: "速度",
  rateTitle: "[EMOJI] 速度",
  rateDescriptionSelection: "**Key**\n👎 - 無法獲得UP角色\n✌️ - 贏得50/50\n👍 - 用以前的保底賺來的\n🙌 - 在當前卡池上使用了保底\n~~選擇您希望更詳細地查看的文檔版本~~ 未來功能。",
  rateMessageError: "加載角色卡池時遇到錯誤，請再試一次",
  rateNotReadyMessage: "人物卡池保底仍在加載中，請再試。\n[STATUS]",
  rateLoadedMessage: "速度已成功加載",
  rateMenuSelectDocumentVersionPlaceholder: "選擇Wish Tally社區數據",
  rateMenuSelectDocumentVersionCustomId: "[SELECT_RATE_MENU_VERSION]",
  rateMenuSelectDocumentVersionSelection: "Wish Tally社區V[DOCUMENT_VERSION]版.X",
  rateBannerDisplayLayout: "\n**[GENSHIN_VERSION]版**",
  rateInnerBannerDisplayLayout: "\n__[TITLE]__",
  rateItemDisplayLayout: "\n> [TITLE]",
  rateFirstBanner: "第一個卡池",
  rateSecondBanner: "第二個卡池",
  rateThirdBanner: "第三個卡池",
  rateFourthBanner: "第四個卡池",
  rateFifthBanner: "第五個卡池",
  rateEmptyTotal: "沒有賺到",
  rateTotalTitle: "一共",
  rateResultLayout: "`[TITLE] [VALUE]`",
  rateTotalMaxPadding: 4,
  ratePercentageMaxPadding: 3,
  rateWinEmoji: "✅",
  rateWinName: "", // Not in use
  rateLoseEmoji: "❌",
  rateLoseName: "", // Not in use

  rateFailedToGetEmoji: "👎",
  rateFailedToGetName: "失敗",
  rateFailedToGetDetailed: "無法獲得評級人物",
  rateWonFiftyFiftyEmoji:"✌️",
  rateWonFiftyFiftyName:"贏得50/50",
  rateWonFiftyFiftyDetailed:"贏得50/50",
  rateUsedPityEmoji: "👍",
  rateUsedPityName: "用過的保底",
  rateUsedPityDetailed: "用以前的保底賺來的",
  rateSkippedEmoji: "👉", // Not in use
  rateSkippedName: "跳過", // Not in use
  rateSkippedDetailed: "沒有嘗試過五星",
  rateSecondAttemptEmoji: "🙌",
  rateSecondAttemptName: "使用當前的保底",
  rateSecondAttemptDetailed: "在當前卡池上使用了保底",
  rateResultLeftPercentageLayout: "[EMOJI]`[VALUE]|[PERCENTAGE]%`",
  rateResultCenterPercentageLayout: "▰",
  rateResultRightPercentageLayout: "`%[PERCENTAGE]|[VALUE]`[EMOJI]",
  rateResultPercentageCovered: "▰",
  rateResultPercentageUncovered: "▱",

  languageSelectByNameCustomId: "[SELECT_LANGUAGE_NAME]",
  /*
   * tally Command
   */
  tallyEmoji: "\uD83E\uDEA7",
  tallyCustomId: "[LOAD_TALLY]",
  botEmoji: "<:wish_tally:1015215165500825611>",
  tallyName: "功能表",
  tallyTitle: "[EMOJI] Wish Tally 機械人",
  tallyDescription: "**[EMOJI] 歡迎來到Wish Tally選單**\n__機械人安名稱管理<@[USER_ID]>__",
  tallyDescriptionBot: "使用下面的按鈕來控制 [EMOJI] Wish Tally 機械人.",
  tallyDescriptionHelp: "此處僅顯示來自Wish Tally社區的數據，請查看 [EMOJI] 幫助頁面已參與。 \n\n**請注意** __只有請求機械人的人才能控制機械人__。",
  /*
   * report-m[DOCUMENT VERSION] Back Command
   */
  reportDocumentEmoji: "\uD83D\uDCD4",
  reportDocumentCustomId: "[LOAD_COMMUNITY_VERSION]",
  reportDocumentName: "文檔",
  /*
   * report-m Command Load all doc
   */
  reportMenuEmoji: "<:wish_tally_community:1015216582231871611>",
  reportMenuCustomId: "[LOAD_COMMUNITY]",
  reportMenuName: "社區",
  reportMenuResetCustomId: "[LOAD_COMMUNITY_RESET]",
  reportMenuResetEmoji: "🗑️",
  reportMenuResetName: "重置過濾器",
  reportMenuMessageError: "無法加載版本 ’[DOCUMENT_VERSION]‘ 的社區文檔可能還不存在？",
  reportMenuMessageErrorLoading: "版本 ’[DOCUMENT_VERSION]‘ 的社區文檔尚未加載。",
  reportMenuMessageException: "遇到錯誤無法加載報告社區文檔版本 `[DOCUMENT_VERSION]`, 請再試一遍？",
  reportMenuMessageNoData: "沒有數據可顯示用於加載社區文檔版本 `[DOCUMENT_VERSION]`, 請再試一遍？",
  reportMenuMessageFound: "顯示社區文檔版本 `[DOCUMENT_VERSION]`",
  reportMenuDefaultPlaceholderForAll: "所有社區數據",
  reportMenuSelectCustomId: "[SELECT_REPORT_MENU_VERSION]",
  reportMenuSelectAllId: "[SELECT_REPORT_MENU_ALL]",
  reportMenuSelectGensionVersionCustomId: "[SELECT_GENSHIN_VERSION]",
  reportMenuSelectGenshinVersionPlaceholder: "選擇原神版本",
  reportMenuSelectGensionVersionName: "原神 V[GENSHIN_VERSION]版",
  reportMenuSelectIndexCustomId: "[SELECT_REPORT_MENU_INDEX]",
  reportMenuDocumentTitle: "Wish Tally社區V[DOCUMENT_VERSION]版.X",
  reportMenuDocumentSelectionTitle: "Wish Tally社區V[DOCUMENT_VERSION]版", // Wish Tally Community V2.0 - 2.6
  reportMenuMessageSuccess: "顯示報告菜單欄",
  /*
   * Select Menu default error message, will display refresh name and emoji for [COMMAND_DESCRIPTION]
   */
  selectMenuMessageCacheError: "無法切換訊息、在最新消息上繼續使用或使用 [COMMAND_DESCRIPTION].",
  selectMenuMessageCacheRestarted: "已重新啓動，無法移動頁面，請使用 [COMMAND_DESCRIPTION].",
  /*
   * report-v[GENSHIN_VERSION] Command
   * Show specific Genshin Version, with all banners
   */
  reportEmoji: "\uD83D\uDCD4",
  reportCustomId: "[LOAD_REPORT_VERSION]",
  reportName: "報告",
  reportMessageError: "無法加載'v[DOCUMENT_VERSION]'中版本的社區文檔可能還不存在？",
  reportMessageException: "已加載v[DOCUMENT_VERSION]文檔，但版本[GENSHIN_VERSION]遇到錯誤，請再試一遍",
  reportMessageUnableFindVersion: "已加載v[DOCUMENT_VERSION]文檔，但版本[GENSHIN_VERSION]似乎尚不存在，請再試一遍",
  reportMessageNoWishes: "已加載v[DOCUMENT_VERSION]文檔, 找到版本[GENSHIN_VERSION]但沒有可用的祈願，請再試一遍",
  reportMessageFound: "加載數據版本[GENSHIN_VERSION]",
  reportSelectCustomId: "[SELECT_REPORT_VERSION]",
  reportSelectIndexCustomId: "[SELECT_REPORT_INDEX]",
  reportMessageSuccess: "顯示報告中",
  /*
   * help Command
   * Homepage for help, will show all the steps
   */
  helpEmoji: "❓",
  helpCustomId: "[LOAD_HELP]",
  helpName: "幫助",
  helpTitle: "[EMOJI] 幫助頁面",
  googleAddonEmoji: "",
  googleAddonName: "Google 插件",
  discordServerEmoji: "",
  discordServerName: "加入服務器",
  helpStepsDescriptionLayout: "\n> [EMOJI][TITLE]",
  helpDescription: "通過使用一下反應，加載相關幫助。\n\nWish Tally是一個擁有跟蹤您的祈願的Google Sheets插件，這是能夠分享到Wish Tally社區所必須的。",
  helpStep1Title: "第一步 - [EMOJI]",
  helpStep1Description: "如何獲得Wish Tally",
  helpStep2Title: "第二部 - [EMOJI]",
  helpStep2Description: "如何導入祈願",
  helpStep3Title: "第三部 - [EMOJI]",
  helpStep3Description: "如何分享Wish Tally",
  helpCommandDescription: "無需導航即可顯示數據的快捷方式 [EMOJI] 命令列表",
  /*
   * help-command Command
   * List all the 機械人 commands, useful for directly going to a specific page
   */
  helpCommandEmoji: "⌨️",
  helpCommandName: "命令",
  helpCommandTitle: "[EMOJI] 命令列表",
  helpCommandCustomId: "[LOAD_HELP_COMMAND]",
  helpCommandDescription: "使用命令導航的快捷方式",
  helpCommandDescriptionTally: "調出主菜單欄",

  helpCommandMessageDisplay: "\n`[COMMAND_NAME]`\n> [COMMAND_DESCRIPTION]",

  helpCommandTitleHelp: "[EMOJI] 幫助部分",
  helpCommandDescriptionHelp: "幫助菜單欄",
  helpCommandDescriptionHelpAddon: "獲取Wish Tally插件",
  helpCommandDescriptionHelpImport: "倒入選項",
  helpCommandDescriptionHelpImportAuto: "自動導入",
  helpCommandDescriptionHelpImportManual: "手動的",
  helpCommandDescriptionHelpImportExport: "出口",
  helpCommandDescriptionHelpShare: "分享Wish Tally",

  helpCommandTitleBotStat: "[EMOJI] 機械人信息",
  helpCommandDescriptionHelpLastUpdate: "顯示從社區加載數據的最近更新，因為這是按計劃完成的",

  helpCommandTitleData: "[EMOJI] 數據部分",
  helpCommandDescriptionReportMenu: "顯示所有社區文檔的摘要",
  helpCommandDescriptionReportMenuSelection: "選擇特定文檔進行報告，例如`!wish report-m2` 用於v2.X社區文檔",
  helpCommandDescriptionReport: "聲稱特定原神版本的報告，例如`!wish report-v2.4`",

  helpCommandTitleContributors: "[EMOJI] 賬戶",
  helpCommandDescriptionsContributor: "僅使用於分享Wish Tally的人",
  helpCommandDescriptionRankWish: "將您的五星數量與社區進行比較",
  helpCommandDescriptionRank: "先是社區內的平均等級",
  helpCommandDescriptionPity: "從Pity Checker展示您的保底",
  helpCommandDescriptionAccount: "Wish Tally貢獻者的菜單欄選項",
  helpCommandDescriptionRate: "所有卡池升級成功的匯總",



  // help-share Command
  helpShareEmoji: "🔓",
  helpShareCustomId: "[LOAD_HELP_SHARE]",
  helpShareName: "分享Wish Tally",
  helpShareTitle: "[EMOJI] 如何分享Wish Tally",

  helpShareMessageDescription: "您必須加入Wish Tally Discord服務器, 才能相信您的共享連接發送消息。\n<[URL]>",
  helpShareMessage2Title: "提供分享鏈接",
  helpShareMessage2Description: "轉到工具欄菜單, `File`然後`Share`",
  helpShareMessage3Title: "編輯權限",
  helpShareMessage3Description: "通過單擊`更改為指導連接的任何人`來更改共享限制",
  helpShareMessage4Title: "每個人都有鏈接",
  helpShareMessage4Description: "檢查3a設置為`查看器`, 因為我的腳本只需要獲得全縣即可查看工作表。\n單擊`複製鏈接`3b向我提供您的Wish Tally文檔。\n請單擊`完成`3c",
  helpShareMessage5Title: "直接發給ModMail消息",
  helpShareMessage5Description: "將您的共享連接發送到機械人 ModMail",
  helpShareMessage6Title: "選擇Discord服務器",
  helpShareMessage6Description: "告訴ModMail您希望將消息發送到`Wish Tally - 原神 Pity Tracker`。點擊正確的號碼....",
  helpShareMessage7Title: "確認信息",
  helpShareMessage7Description: "你應該從ModMail收到確認消息，工作人員會從那裡問您提供幫助。",
  /*
   * help-addon Command
   */
  helpAddonEmoji: "📝",
  helpAddonCustomId: "[LOAD_HELP_ADDON]",
  helpAddonName: "獲取Wish Tally",
  helpAddonTitle: "[EMOJI] 如何獲取Wish Tally",
  helpAddonMessageDescription: "**Wish Tally是Google 官方插件**\n插件獲取得Google 批准後，即使您製作了多張新的空白表格，此方法也只會被詢問**一次**。安裝次插件時，Google 也沒有大的警告消息。\n\n__訪問此處安裝插件__\n<[URL]>\n\n",
  helpAddonMessage2Title: "安裝插件",
  helpAddonMessage2Description: "通過全縣彈出式視窗安裝Wish Tally",
  helpAddonMessage3Title: "只擴空白試算表",
  helpAddonMessage3Description: "安裝插件後，您可以將其分配及任何試算表文檔。只需從<[URL]>或工具欄`File` -> `New` -> `Spreadsheet`創建一個新的試算表",
  helpAddonMessage4Title: "其用插件",
  helpAddonMessage4Description: "要為腳本提供完全訪問權限，您必須告訴Google 為這個新創建的試算表使用插件。\n轉到 `Toolbar Extensions` -> `Add-ons` -> `Manage add-ons`",
  helpAddonMessage5Title: "啓用Wish Tally",
  helpAddonMessage5Description: "選擇管理加載項後會淡出一個窗口。按下三點，然後轉到`在本文檔中使用`以啓用Wish Tally插件。",
  helpAddonMessage6Title: "刷新您的頁面",
  helpAddonMessage6Description: "**重要** - 刷新文檔會自動將區域設置更改為`英國`, 這樣做是為了讓公示期作用。\n\n使用刷新按鈕或`F5`強制刷新加載頁面。",
  helpAddonMessage7Title: "初始化文檔",
  helpAddonMessage7Description: "使用`擴展名` -> `Wish Tally` -> `初始化` 開始加載Wish Tally所需的所有工作表。",
  /*
   * help-import Command
   */
  helpImportEmoji: "📥",
  helpImportCustomId: "[LOAD_HELP_IMPORT]",
  helpImportName: "導入祈願",
  helpImportTitle: "[EMOJI] 如何導入祈願",
  helpImportDescription: "有多種方法可以在 Wish Tally 文檔中添加祈願，以幫助避免在輸入您應該做的祈願時出現人為錯誤`自動導入`。",
  helpImportDescriptionAutoTitle: "[EMOJI] 自動導入 (推薦的)",
  helpImportDescriptionAuto: "訪問祈願歷史是需要您登錄遊戲並提取URL。",
  helpImportDescriptionManualTitle: "[EMOJI] 手動導入",
  helpImportDescriptionManual: "只需直接`複製`和`粘貼`祈願，無需使用API。必須瞭解如何使用覆蓋咧，否則希望全部出問題，用可用的工具可以幫助簡化此方法。",
  helpImportDescriptionExportTitle: "[EMOJI] 將導出文件轉換為Wish Tally",
  helpImportDescriptionExport: "如果您從其他Wish Tracker備份了您的祈願，您可以使用到處轉換器。",
  /*
   * help-import-auto Command
   */
  helpImportAutoEmoji: "🖥️",
  helpImportAutoCustomId: "[LOAD_HELP_IMPORT_AUTO]",
  helpImportAutoName: "自動導入",
  helpImportAutoTitle: "[EMOJI] 自動導入祈願",
  
  helpImportAutoMessageDescription: "這是為了幫助使用米哈游API自動將祈願數據導入您的祈願清單表。\n\n然後，它會使用密鑰直接代表您與 miHoYo 通信，以檢查您在遊戲中的祈願歷史記錄，並將任何新發現的祈願存儲到您的祈願清單表中。 您不需要手動輸入覆蓋，因為這是自動為您完成的。\n\n您仍然可以使用複製和粘貼方法作為保存祈願歷史記錄的更安全方法，但如果您想使用這個更簡單的選項，那麼您 可以按照以下步驟操作：\n**請注意，任何較舊/過去 6 個月的祈願都無法通過這種方式檢索，您必須在它們不再可見之前將其保存。**",
  helpImportAutoMessage2Title: "電腦的第一部分 - 生成網址",
  helpImportAutoMessage2Description: "登入原神，打開祈願菜單病房祈願歷史向信息（無論您查看哪個卡池歷史）。這將在您的原神日誌文本文件中生成URL。",
  helpImportAutoMessage3Title: "第二部分 - 查找日誌文件",
  helpImportAutoMessage3Description: "在Window中打開文件瀏覽器並將其複製並粘貼到地址欄中：\n`%USERPROFILE%/AppData/LocalLow/miHoYo/原神/`",
  helpImportAutoMessage4Title: "第三部分 - 提取網址",
  helpImportAutoMessage4Description: "右鍵單擊並編輯/打開 `output_log.txt` 文本文件",
  helpImportAutoMessage5Title: "第四部分 - 複製網址",
  helpImportAutoMessage5Description: "在文本文件的底部附近，您會看到以以下開頭的URL\n\n```https://webstatic-sea.mihoyo.com/............game_biz=h4e_global#/log```\n\n突出顯示並輔之爭哥URL文本",
  helpImportAutoMessage6Title: "第五部分 - 開始自動導入",
  helpImportAutoMessage6Description: "確保下拉選項設置為`從米哈游自動導入`，然後單擊倒入圖標開始。",
  helpImportAutoMessage7Title: "第六部分",
  helpImportAutoMessage7Description: "將URL粘貼到自動導入彈出式視窗中，然後按`OK`。",
  helpImportAutoMessage8Title: "中國服務器",
  helpImportAutoMessage8Description: "使用B3中的下拉選項在`設置`表中將服務器更改`中國`。再繼續使用自動導入之前。",
  /*
   * help-import-manual Command
   */
  helpImportManualEmoji: "🖱️",
  helpImportManualCustomId: "[LOAD_HELP_IMPORT_MANUAL]",
  helpImportManualName: "手動導入",
  helpImportManualTitle: "[EMOJI] 手動倒入祈願",
  helpImportManualMessageDescription: "在Wish Tally中，您可以手動複製和粘貼您的祈願歷史記錄，作為使用自動導入的另一種選擇。此方法不需要額外的工具，但重要的是使用覆蓋咧進行10次祈願拉動（相同的日期和時間），以確保祈願一正確的順序準確存儲。",
  helpImportManualMessage2Title: "第一部分 - 將祈願歷史複製到Wish Tally",
  helpImportManualMessage2Description: "轉到祈願菜單並使用相應的揀選則`歷史記錄`。\n\n然後突出顯示的信息並使用`CTRL+C`快捷方式複製（僅用右鍵單擊）。",
  helpImportManualMessage3Title: "第二部分",
  helpImportManualMessage3Description: "從`儀表板`，轉到試算表中相應的祈願歷史記錄頁面。",
  helpImportManualMessage4Title: "粘貼值",
  helpImportManualMessage4Description: "接下來，在A列中安一個空單元格，然後按`CTRL + V`或`CTRL+ Shift + V`（僅粘貼值）",
  helpImportManualMessage5Title: "粘貼問題",
  helpImportManualMessage5Description: "如果粘貼值如下所示，則需要在粘貼是避免使用右鍵單擊選項菜單。",
  helpImportManualMessage6Title: "第三部分 - 使用覆蓋管理10-Wish Pulls（非常重要）",
  helpImportManualMessage6Description: "10 multi中的所有祈願都將具有相同的時間戳和日期。\n\n因為Genshin祈願歷史是從最近到醉酒顯示的，我們可以假設10 multi中的最後一個條目是祈願編號1。\n\n在一下示例中，列表底部的烏鴉弓將是第一個拉動",
  helpImportManualMessage7Title: "",
  helpImportManualMessage7Description: "粘貼值[CTRL+V]並通過漸入相應的數字手動分配覆蓋。",
  helpImportManualMessage8Title: "",
  helpImportManualMessage8Description: "繼續到下一頁（例如，在13之後繼續到第14頁）並對剩餘的10個多重執行相同的操作。",
  helpImportManualMessage9Title: "第四部分 - 按順序排列祈願",
  helpImportManualMessage9Description: "由於祈願歷史的順序，需要對粘貼的值進行排序。\n\n確保所有多祈願都輸入了覆蓋數字，否則排序將全部錯誤。\n\n準備好後，單擊工作表頂部的「排序」按鈕。\n\n應用排序後，覆蓋將自動按日期和時間順序對多祈願 1 到 10 和單一祈願進行排序。",
  /*
   * help-import-export Command
   */
  helpImportExportEmoji: "⛏️",
  helpImportExportCustomId: "[LOAD_HELP_IMPORT_EXPORT]",
  // List of options
  helpImportExportMessageOptionLayout: "\n[PROJECT_NAME] `[FILE_TYPE]`- <[URL]>",
  exportOption1ProjectName: "Genshin祈願匯出",
  exportOption1FileType: "XLSX文件",
  exportOption1URL: "https://github.com/biuuu/genshin-wish-export",
  exportOption2ProjectName: "Genshin Wishes",
  exportOption2FileType: "CSV文件",
  exportOption2URL: "https://genshin-wishes.com",
  exportOption3ProjectName: "paimon.moe",
  exportOption3FileType: "XLSX祈願",
  exportOption3URL: "https://paimon.moe",

  helpImportExportName: "匯出 匯入",
  helpImportExportTitle: "[EMOJI] 從匯出數據進匯入祈願",
  helpImportExportMessageDescription: "你可以使用這個轉換器文檔來幫助轉換您 Wish Tally 的祈願。\n<[URL]>\n\n**支持的導出文件**",

  helpImportExportMessage2Title: "製作試算表的副本",
  helpImportExportMessage2Description: "在訪問試算表之前，您需要先擁有一個 Google 帳戶。 將此試算表的副本複製到您的Google雲端硬盤中。\n<[URL]>\n\n在`文件`菜單工具欄中, 點擊`製作副本`。 這會將試算表的副本創建到您的Google 雲端硬盤中，然後您可以對其進行修改以存儲您自己的祈願歷史記錄。\n\n將出現`複製文檔`彈出式視窗，您可以在`名稱`部分重命名文檔，單擊`確定`會講Wish Tally轉換的副本保存到您的Google Drive",
  helpImportExportMessage3Title: "檢查README",
  helpImportExportMessage3Description: "要瞭解有關如何使用轉換器文檔的更多信息，請查看`README`表",
}