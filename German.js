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
  displayTotal: "Maximale",
  displayGrandTotal: "Grand Total",
  displayAverageShorthand: "avg.",
  displayOtherItems: "Other",
  displayBannerName: {
    "Character Event Banner": "Figurenaktionsgebet",
    "Weapon Event Banner": "Waffenaktionsgebet",
    "Permanent Banner": "Standardgebet",
    "Novice Banner": "Neulingsgebete",
  },
  displayWeaponType: {
    "Character": "Figur",
    "Weapon": "Waffe",
  },
  
  rarity5StarEmoji: "⋆⋆⋆⋆⋆",
  rarity5StarName: "5 Sterne",
  rarity4StarEmoji: "⋆⋆⋆⋆",
  rarity4StarName: "4 Sterne",
  rarity3StarEmoji: "⋆⋆⋆",
  rarity3StarName: "3 Sterne",
  refreshName: "Neuladen",
  refreshEmoji: "🔄",
  statusSuccessName: "Erfolg",
  statusSuccessEmoji: "✅",
  statusErrorName: "Fehler",
  statusErrorEmoji: "❌",
  statusLoadingName: "Laden",
  statusLoadingEmoji: "📂",
  statusCheckingName: "Überprüfen",
  statusCheckingEmoji: "⏳",
  statusProcessingName: "Verarbeiten..",
  statusProcessingEmoji: "⏳",
  statusLoadedEmoji: "✅",
  statusLoadedName: "Geladen",
  statusLoadingEmoji: "⏳",
  statusLoadingName: "Am Laden",
  statusLoadEmoji: "❌",
  statusLoadName: "Nicht geladen",

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
  latestVersionName: "Letzte VErsion",
  latestVersionEmoji: "🔎",
  latestVersionTitle: "[EMOJI] Genshin Impact Version [GENSHIN_VERSION]",
  // ping Command
  replaceCodeBotName: "[BOT_NAME]",
  pingMessage: ":wave: [BOT_NAME] Ich lebe noch",
  // last-update Command
  lastUpdateMessageError: "Bitte warte noch bis das Community Cache sheet geladen ist: [STATUS]",
  lastUpdateMessageException: "Fehler. Kann keine Daten aus dem Community Cache laden: [STATUS]",
  lastUpdateName: "Letztes Update",
  lastUpdateTitle: "Letzte Update Zusammenfassung vom Community Document",
  lastUpdateEmoji: "⏲️",
  lastUpdateCustomId: "[LOAD_LAST_UPDATE]",
  lastUpdateDocumentTitle: "Community V[DOCUMENT_VERSION].X",

  lastUpdateStatusCommunityAccounts: "Community Account Dokument",
  lastUpdateStatusLanguagePadding: 18,
  lastUpdateStatusDocumentPadding: 16,
  lastUpdateStatusDocument: "DOKUMENT GELADEN",
  lastUpdateStatusDocumentAccount: "ACCOUNTS AKTUALISIEREN",
  lastUpdateStatusDocumentCache: "CACHE AKTUALISIEREN",
  lastUpdateStatusDocumentWishes: "BANNER AKTUALISIEREN",
  lastUpdateStatusCommunityPadding: 15,
  lastUpdateStatusItemsByBanner: "ITEMS NACH BANNER",
  lastUpdateStatusAccounts: "ACCOUNTS",
  lastUpdateStatusCharacterBannerPity: "PITY",
  lastUpdateStatusDatePadding: 5,
  lastUpdateStatusStartDate: "START",
  lastUpdateStatusEndDate: "ENDE",
  lastUpdateStatusSummaryPadding: 14,
  lastUpdateStatusDuration: "DAUER",
  lastUpdateStatusAttempts: "VERSUCHE",
  lastUpdateStatusMaxAccounts: "MAX ACCOUNTS",
  lastUpdateStatusTotalWishes: "MAXIMALE WÜNSCHE",
  lastUpdateStatusCurrentUpdates: "ACCOUNT CHECK",
  lastUpdateStatusHour: "Stunde",
  lastUpdateStatusHours: "Stunden",
  lastUpdateStatusAnd: "und",
  lastUpdateStatusMinute: "Minute",
  lastUpdateStatusMinutes: "Minuten",
  lastUpdateStatusAgo: "ago",
  /*
   * account Command
   */
  accountEmoji: "🔑",
  accountCustomId: "[LOAD_ACCOUNT]",
  accountName: "Account",
  accountTitle: "[EMOJI] Account",
  accountDescriptionFound: "Vielen Dank für deinen Beitrag zur Wish Tally Community, derzeit gibt es Daten für [ACCOUNTS_MAX] Accounts.\n\nHier sind deine exklusiven Optionen.",
  accountDescriptionNotFound: "Leider können wir deinen Wish Tally-Account nicht finden. Es gibt zwar [ACCOUNTS_MAX]-Accounts, aber keiner ist mit deinem Discord-Account verknüpft.\n\nBesuche bitte die Hilfeseite, um herauszufinden, wie Du zur Wish Tally-Community beitragen kannst.\n\nWenn Du deinen Account kürzlich über ModMail geteilt hast, musst Du darauf warten, dass die Mitarbeiter dein Dokument überprüfen.",
  accountDescriptionNotLoadedAccount: "Der Bot hat vor kurzem den Cache geleert, er wird die Konten bald neu laden. Im Moment sind die Schaltflächen alle aktiviert, aber diese Befehle erfordern immer noch eine Verknüpfung mit deinem Wish Tally-Konto.",
  accountDescriptionLayout: "\n> [EMOJI][COMMAND_NAME] - [COMMAND_DESCRIPTION]",
  accountDescriptionRank: "Zeigt deine gesamten Wünsche im jedem Community Document, und deinen durchschnittlichen Pity Rang.",
  accountDescriptionWish: "Zeigt deinen Wunsch Beitrag nach Rang. Nützlich, um zu wissen, welche Genshin Version in der Community angesagt war.",
  accountDescriptionPity: "Extrahiert deinen letzten Pity aus deinem Dokument, um Leuten deine Wünsche zu zeigen, ohne ein Screenshot machen zu müssen.",
  accountDescriptionRate: "Zeigt alle Gewinne für die limitierten Charaktere im `Charakter Event Banner`.",
  /*
   * rank Command
   */
  rankEmoji: "🏆",
  rankCommunityEmoji: "🌎",
  rankCustomId: "[LOAD_RANK]",
  rankName: "Rang",
  rankAccountTitle: "Account Zusammenfassung",
  rankTitle: "Rang Zusammenfassugn",
  rankDescription: "Der persönliche Rang ist dein Ranking anhand der Daten aus deinem Wish Tally, der Gemeinschaftsrang ist der Durchschnitt aller Konten, d.h. je niedriger die Zahl, desto besser ist dein Rang.",
  rankCommunityTitle: "[EMOJI] Community Ranking",
  rankPersonalTitle: "[EMOJI] Persönliches Ranking",
  rankNoWishes: "Keine Wünsche in dieser Version gemacht.",
  /*
   * rank-wish Command
   */
  rankWishEmoji: "✨",
  rankWishCustomId: "[LOAD_RANK_WISH]",
  rankWishName: "Wunsch",
  rankWishLimit: 15,
  rankWishGenshinVersionLimit: 5,
  rankWishGenshinVersionSameLimit: 2,
  rankWishLimitPadding: 2,
  rankWishSameTotalLimit: 3,
  rankWishSameTotalMessage: "__Hidden [STATUS] Accounts der Rang [RANK] hat__",
  rankWishTitle: "Wunsch Ranking",
  rankWishNotReadyMessage: "Wunsch Daten nach Account wurden nicht geladen. Bitte versuche es noch einmal.\n[STATUS]",
  rankWishLoadedMessage: "Rang nach Wünshcen wurde erfolgreich geladen",
  rankWishYouEmoji: "👈",
  rankWishRarity4StarEmoji: "4⭐",
  rankWishRarity5StarEmoji: "5⭐",
  rankWishSelectVersionDefaultPlaceholderForAll: "Komplette Community Daten",
  rankWishRankTitle: "Wish Tally Community V",
  rankWishRankGenshinTitle: "Genshin Version V",
  rankWishDocumentTitle: "Wish Tally Community V[DOCUMENT_VERSION].X",
  rankWishSelectVersionAllId: "[SELECT_RANK_WISH_VERSION_ALL]",
  rankWishSelectBannerIndexId: "[SELECT_RANK_WISH_BANNER_INDEX]",
  rankWishSelectVersionIndexId: "[SELECT_RANK_WISH_VERSION_INDEX]",
  rankWishMessageSuccessSelect: "Navigation zwischen Bannern",
  rankWishMessageError: "Es ist ein Fehler aufgetreten, versuche es bitte ein anderes Mal",

  checkCommunityAccountMessageError: "Bitte warte, bis der Community Accounts sheet geladen wurde: [STATUS]",
  // finding account only show for error
  findingAccountName: "Finde Account",
  findingAccountEmoji: "🔎",
  findingAccountMessageNotFound: "Fehler! konnte deinen Account bei den Community Accounts nicht finden.\nWenn Du der Community noch nicht beigetreten bist, gehe auf die Hilfeseite, um herauszufinden, wie Du dein Wish Tally sheet freigeben kannst. Wenn Du kürzlich beigetreten bist, warte bitte auf die Aktualisierung der Community.",
  findingAccountMessageException: "Fehler! Kann keine Daten aus dem Community Dokument [DOCUMENT_VERSION] extrahieren.",
  findingAccountMessageError: "Fehler. Kann kein Community Account sheet finden.",

  displayRankMessageError: "Fehler. Kann kein Community Dokument [DOCUMENT_VERSION] finden.",
  displayRankMessageNotFound: "Das Community Dokument [DOCUMENT_VERSION]hat noch keine Daten von dir. Deine Account Position ist [ACCOUNT_ID] wahrend es [ACCOUNTS_MAX] Accounts gibt. Bitte warte, bis die Community geupdated wurde",
  displayRankMessageException: "Fehler! Konnte keine Daten von der Community extrahieren.",
  /*
   * pity Command
   */
  pityEmoji: "🧮",
  pityCustomId: "[LOAD_PITY]",
  pityName: "Pity",
  pityMessageError: "Fehler beim Laden deines Dokumentes",
  pityMessageLoading: "Lade Dokument [ATTEMPTS_INDEX]/[ATTEMPTS_MAX] Versuche.",
  pityMessageUnableLoad: "Fehler. Konnte Dokument nicht Laden. Bitte versuche es später nocheinmal.",
  pityMessageUnableFind: "Fehler. Konnte das `Pity Checker` sheet im Dokument nicht finden.",
  pityMessageLoadingPity: "Lade `Pity Checker` sheet Daten [ATTEMPTS_INDEX]/[ATTEMPTS_MAX] Versuche.",
  pityMessageUnablePityExtract: "Fehler beim Extrahieren vom `Pity Checker`. Bitte versuche es später nocheinmal.",
  pityMessagePitySheetOld: "Dein Dokument 'Pity Checker' sheet ist nicht mehr aktuell, check <#836651770100842576>.",
  pityMessagePitySheetSuccess: "Anzeige deines Pity aus deinem Dokument",
  pityCurrentWishNumber: "Aktuelle Wunsch Nummer",
  pityBackCustomId: "[LOAD_PITY_BACK]",
  pityNextCustomId: "[LOAD_PITY_NEXT]",
  pityBackEmoji: "⭐", // Back
  pityBackTitle: "⭐⭐⭐⭐⭐", // Back
  pityBackNoEarned: "⭐⭐⭐⭐⭐ - kein 5 Sterne gefunden", // Back
  pityBackName: "5 Sterne", // Back
  pityNextEmoji: "⭐", // Next
  pityNextTitle: "⭐⭐⭐⭐", // Next
  pityNextNoEarned: "⭐⭐⭐⭐ - kein 4 Sterne gefunden", // Next
  pityNextName: "4 Sterne", // Next
  /*
   * rate Command
   */
  rateEmoji: "🎯",
  rateCustomId: "[LOAD_RATE]",
  rateVersionCustomId: "[LOAD_RATE_VERSION]",
  rateName: "Rate",
  rateTitle: "[EMOJI] Rate",
  rateDescriptionSelection: "**Key**\n👎 - Charakter mit höherer Chance konnte nicht gewonnen werden\n✌️ - Gewonnener 50/50\n👍 - Verdient durch vorheriges Pity\n🙌 - Gebrauchtes Pity auf dem aktuellen Banner\n~~Wähle aus, welche Dokumentversion Du detailiierter sehen möchtest~~ Bald.",
  rateMessageError: "Ein Fehler ist während des Ladens des Charakter Banner Pity aufgetreten. Bitte versuche es zu einer anderen Zeit nocheinmal.",
  rateNotReadyMessage: "Charakter Banner Pity wird noch geladen.bitte versuche es nocheinmal.\n[STATUS]",
  rateLoadedMessage: "Rate wurde erfoglreich geladen",
  rateMenuSelectDocumentVersionPlaceholder: "Wähle Wish Tally Community Daten",
  rateMenuSelectDocumentVersionCustomId: "[SELECT_RATE_MENU_VERSION]",
  rateMenuSelectDocumentVersionSelection: "Wish Tally Community V[DOCUMENT_VERSION].X",
  rateBannerDisplayLayout: "\n**Version [GENSHIN_VERSION]**",
  rateInnerBannerDisplayLayout: "\n__[TITLE]__",
  rateItemDisplayLayout: "\n> [TITLE]",
  rateFirstBanner: "Erster Banner",
  rateSecondBanner: "Zweiter Banner",
  rateThirdBanner: "Dritter Banner",
  rateFourthBanner: "Vierter Banner",
  rateFifthBanner: "Fünfter Banner",
  rateEmptyTotal: "nichts gewonnen",
  rateTotalTitle: "Total",
  rateResultLayout: "`[TITLE] [VALUE]`",
  rateTotalMaxPadding: 4,
  ratePercentageMaxPadding: 3,
  rateWinEmoji: "✅",
  rateWinName: "", // Not in use
  rateLoseEmoji: "❌",
  rateLoseName: "", // Not in use

  rateFailedToGetEmoji: "👎",
  rateFailedToGetName: "Verloren",
  rateFailedToGetDetailed: "Charakter mit höherer Chance konnte nicht gewonnen werden.",
  rateWonFiftyFiftyEmoji:"✌️",
  rateWonFiftyFiftyName:"Gewonnen 50/50",
  rateWonFiftyFiftyDetailed:"Gewonnener 50/50",
  rateUsedPityEmoji: "👍",
  rateUsedPityName: "Gebrauchtes Pity",
  rateUsedPityDetailed: "Verdient durch vorheriges Pity",
  rateSkippedEmoji: "👉", // Not in use
  rateSkippedName: "Skip", // Not in use
  rateSkippedDetailed: "Kein 5-Sterne Versuch",
  rateSecondAttemptEmoji: "🙌",
  rateSecondAttemptName: "Aktuelles Pity",
  rateSecondAttemptDetailed: "Benutzes Pity auf aktuellem Banner",
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
  tallyName: "Menu",
  tallyTitle: "[EMOJI] Wish Tally Bot",
  tallyDescription: "**[EMOJI] Willkommen zum Wish Tally Menü**\n__DerBot wird verwaltet von <@[USER_ID]>__",
  tallyDescriptionBot: "Benutze die unteren Knöpfe, um den [EMOJI] Wish Tally Bot zu steuern.",
  tallyDescriptionHelp: "Es werden nur Daten aus der Wish Tally Community hier dargestellt. Check die [EMOJI] Hilfeseite, bei Fragen. \n\n**Bitte merke dir** das __nur Die Person, die den Bot aufgerufen hat, diesen steuern kann.__.",
  /*
   * report-m[DOCUMENT VERSION] Back Command
   */
  reportDocumentEmoji: "\uD83D\uDCD4",
  reportDocumentCustomId: "[LOAD_COMMUNITY_VERSION]",
  reportDocumentName: "Dokument",
  /*
   * report-m Command Load all doc
   */
  reportMenuEmoji: "<:wish_tally_community:1015216582231871611>",
  reportMenuCustomId: "[LOAD_COMMUNITY]",
  reportMenuName: "Community",
  reportMenuResetCustomId: "[LOAD_COMMUNITY_RESET]",
  reportMenuResetEmoji: "🗑️",
  reportMenuResetName: "Filter zurücksetzen",
  reportMenuMessageError: "Konnte das Community Dokument der Version `[DOCUMENT_VERSION]` nicht laden. Vielleicht existiert es bisher noch nicht.",
  reportMenuMessageErrorLoading: "Community Dokument der Version `[DOCUMENT_VERSION]` wurde noch nicht geladen.",
  reportMenuMessageException: "Konnte Community Dokument Version `[DOCUMENT_VERSION]` nicht laden. Bitte versuche es nocheinmal.",
  reportMenuMessageNoData: "Keine Daten zum Anzeigen vom Community Dokument Version `[DOCUMENT_VERSION]`. Bitte versuche es nocheinmal.",
  reportMenuMessageFound: "Anzeigen des Community Dokument Version `[DOCUMENT_VERSION]`",
  reportMenuDefaultPlaceholderForAll: "Alle Community Daten",
  reportMenuSelectCustomId: "[SELECT_REPORT_MENU_VERSION]",
  reportMenuSelectAllId: "[SELECT_REPORT_MENU_ALL]",
  reportMenuSelectGensionVersionCustomId: "[SELECT_GENSHIN_VERSION]",
  reportMenuSelectGenshinVersionPlaceholder: "Select Genshin Impact Version",
  reportMenuSelectGensionVersionName: "Genshin Impact V[GENSHIN_VERSION]",
  reportMenuSelectIndexCustomId: "[SELECT_REPORT_MENU_INDEX]",
  reportMenuDocumentTitle: "Wish Tally Community V[DOCUMENT_VERSION].X",
  reportMenuDocumentSelectionTitle: "Wish Tally Community V[DOCUMENT_VERSION]", // Wish Tally Community V2.0 - 2.6
  reportMenuMessageSuccess: "Anzeige des Report Menüs",
  /*
   * Select Menu default error message, will display refresh name and emoji for [COMMAND_DESCRIPTION]
   */
  selectMenuMessageCacheError: "Kann nicht zwischen den Nachrichten wechseln. Wiederhole bei der letzten Nachricht oder nutze [COMMAND_DESCRIPTION].",
  selectMenuMessageCacheRestarted: "Bot wurde neugestartet. Kann Seiten nicht bewegen. Benutze bitte [COMMAND_DESCRIPTION].",
  /*
   * report-v[GENSHIN_VERSION] Command
   * Show specific Genshin Version, with all banners
   */
  reportEmoji: "\uD83D\uDCD4",
  reportCustomId: "[LOAD_REPORT_VERSION]",
  reportName: "Report",
  reportMessageError: "Kann das Community Dokument der Version [GENSHIN_VERSION] im 'v[DOCUMENT_VERSION]' nicht laden. Existiert es vielleicht nicht?",
  reportMessageException: "Dokument v[DOCUMENT_VERSION] geladen, [GENSHIN_VERSION] hat aber einen Fehler festgestellt. Bitte nocheinmal versuchen.",
  reportMessageUnableFindVersion: "Dokument v[DOCUMENT_VERSION] geladen, aber Version [GENSHIN_VERSION] scheint nicht zu existieren. Bitte nocheinmal versuchen",
  reportMessageNoWishes: "Dokument v[DOCUMENT_VERSION] geladen, Version gefunden [GENSHIN_VERSION], aber es sind keine Wünsche verfügbar. Bitte nocheinmal versuchen",
  reportMessageFound: "Daten für Version [GENSHIN_VERSION] geladen",
  reportSelectCustomId: "[SELECT_REPORT_VERSION]",
  reportSelectIndexCustomId: "[SELECT_REPORT_INDEX]",
  reportMessageSuccess: "Report Anzeige",
  /*
   * help Command
   * Homepage for help, will show all the steps
   */
  helpEmoji: "❓",
  helpCustomId: "[LOAD_HELP]",
  helpName: "Help",
  helpTitle: "[EMOJI] Help Page",
  googleAddonEmoji: "",
  googleAddonName: "Google Addon",
  discordServerEmoji: "",
  discordServerName: "Join Server",
  helpStepsDescriptionLayout: "\n> [EMOJI][TITLE]",
  helpDescription: "Mit der Auswahl der unteren Reaktionen, wird die relevante Hilfe geladen.\n\nWish Tally ist ein Google Sheet Addon welches hilft deine Wünsche zu tracken. Dies ist notwendig, damitd ei Wünsche mit der Wish Tally Community geteilt werden können.",
  helpStep1Title: "Schritt 1 - [EMOJI]",
  helpStep1Description: "Wie bekomme ich Wish Tally",
  helpStep2Title: "Schritt 2 - [EMOJI]",
  helpStep2Description: "Wie importiere ich Wünsche",
  helpStep3Title: "Schritt 3 - [EMOJI]",
  helpStep3Description: "Wie teile ich meinen Wish Tally",
  helpCommandDescription: "Kurzbefehl für Datenanzeige ohne Navigation über die [EMOJI] Command List",
  /*
   * help-command Command
   * List all the bot commands, useful for directly going to a specific page
   */
  helpCommandEmoji: "⌨️",
  helpCommandName: "Befehle",
  helpCommandTitle: "[EMOJI] Befehlsliste",
  helpCommandCustomId: "[LOAD_HELP_COMMAND]",
  helpCommandDescription: "Kurzbefehl für Befehlsnavigation",
  helpCommandDescriptionTally: "zurück zum Hauptmenü",

  helpCommandMessageDisplay: "\n`[COMMAND_NAME]`\n> [COMMAND_DESCRIPTION]",

  helpCommandTitleHelp: "[EMOJI] Help Section",
  helpCommandDescriptionHelp: "Hilfemenü",
  helpCommandDescriptionHelpAddon: "Wish Tally Addon laden",
  helpCommandDescriptionHelpImport: "Importiere Optionen",
  helpCommandDescriptionHelpImportAuto: "Auto Import",
  helpCommandDescriptionHelpImportManual: "Manuell",
  helpCommandDescriptionHelpImportExport: "Export",
  helpCommandDescriptionHelpShare: "Wish Tally teilen",

  helpCommandTitleBotStat: "[EMOJI] Bot Information",
  helpCommandDescriptionHelpLastUpdate: "Anzeige des letzetn Updates. Wird regelmäßig durchgeführt",

  helpCommandTitleData: "[EMOJI] Data Section",
  helpCommandDescriptionReportMenu: "Anzeige der Zusammenfassung des Community Dokumentes",
  helpCommandDescriptionReportMenuSelection: "Selektiere spezifisches Dokument für den Report. z.B. `!wish report-m2` für v2.X community document",
  helpCommandDescriptionReport: "Generiere einen Report für eine spezifische Genshin Impact version. z.B. `!wish report-v2.4`",

  helpCommandTitleContributors: "[EMOJI] Account",
  helpCommandDescriptionsContributor: "Nur für Leute, die Ihren Wish Tally geteilt haben",
  helpCommandDescriptionRankWish: "Vergleiche deine Anzahl an 5-Sternen mit der Community",
  helpCommandDescriptionRank: "Anzeige des durchschnittlichen Ranges innerhalb der Community",
  helpCommandDescriptionPity: "zeige deinen Pity vom Pity Checker",
  helpCommandDescriptionAccount: "Menü optionen für Wish Tally Teilnehmer",
  helpCommandDescriptionRate: "Zusammenfassung aller erfolgreichen Banner",



  // help-share Command
  helpShareEmoji: "🔓",
  helpShareCustomId: "[LOAD_HELP_SHARE]",
  helpShareName: "Teile Wish Tally",
  helpShareTitle: "[EMOJI] Wie teile ich Wish Tally",

  helpShareMessageDescription: "Du musst dem Wish Tally Discord Server beitreten und deinen Link zum Sheet teilen.\n<[URL]>",
  helpShareMessage2Title: "Share Link erhalten",
  helpShareMessage2Description: "Gehe zum Menü `Datei` und danach `Freigeben`",
  helpShareMessage3Title: "Berechtigungen ändern",
  helpShareMessage3Description: "Ändere die Berechtigungen, indem du auf `Jeder, der über den Link verfügt` klickst",
  helpShareMessage4Title: "Jeder, der über den Link verfügt",
  helpShareMessage4Description: "Checke dass 3a auf `Betrachter` steht, da das Skript diese Berechtigung brauche, um die Daten des Sheet zu sehen.\nKlicke dann auf `Link kopieren` 3b Sende mir den Link zum Wish Tally sheet.\nUm die Änderungen zu Bestätigen drücke dann auf `Fertig` 3c",
  helpShareMessage5Title: "Direkte Nachricht ModMail",
  helpShareMessage5Description: "Sende deinen Link an den BOT ModMail",
  helpShareMessage6Title: "Wähle Discord Server",
  helpShareMessage6Description: "Schreibe MODMail, dass du die Wünsche zum `Wish Tally - Genshin Impact Pity Tracker` hinzufügen möchtest. Klicke auf die korrekte Nummer....",
  helpShareMessage7Title: "Bestätigungsnachricht",
  helpShareMessage7Description: "Du solltest eine Nachricht mit einer Bestätigung von ModMail bekommen und das Serverpersonal wird dich von da an unterstützen.",
  /*
   * help-addon Command
   */
  helpAddonEmoji: "📝",
  helpAddonCustomId: "[LOAD_HELP_ADDON]",
  helpAddonName: "Erhalte Wish Tally",
  helpAddonTitle: "[EMOJI] Wie kriege ich Wish Tally",
  helpAddonMessageDescription: "**Wish Tally ist ein offizielles Google Add-On**\nDieses Add-on welches von Google genehmigt ist wird nur **einmal** nach der Berechtigung fragen, selbst wenn du mehrere neue Sheets erstellst. Es gibt keine große Warnmeldung von Google wenn dieses Add-on installiert wird.\n\n__Besuche diese Seite, um das Add-on zu installieren__\n<[URL]>\n\n",
  helpAddonMessage2Title: "Installiere Add-On",
  helpAddonMessage2Description: "Gehe durch die Berechtigungs Popups um das Wish Tally Add-On zu installieren",
  helpAddonMessage3Title: "Erstelle ein neues Sheet",
  helpAddonMessage3Description: "Nachdem du das Add-On installiert hast kannst du es dem neuen Sheet zuweisen. Erstelle einfach ein neues Sheet entweder von der <[URL]> oder aus dem Menü `Datei` -> `Neu` -> `Tabelle`",
  helpAddonMessage4Title: "Aktivieren des Add-on",
  helpAddonMessage4Description: "Um dem Skript vollen Zugriff zu gewähren musst du es dem Sheet hinzufügen.\nGehe zum Menü `Erweiterungen` -> `Add-ons` -> `Add-ons verwalten`",
  helpAddonMessage5Title: "Aktiviere Wish Tally",
  helpAddonMessage5Description: "Es öffnet sich ein Fenster, nachdem du auf Add-ons verwalten klickst. Klicke auf die 3 Punkte und dann auf `Nutzung nur in diesem Dokument` um es zu aktivieren.",
  helpAddonMessage6Title: "Aktualisiere die Seite",
  helpAddonMessage6Description: "**WICHTIG** - Die Aktualisierung des Dokumentes ändert automatisch die locale zu `United Kingdom`. Das ist Notwendig, damit die Formeln funktionieren.\n\nNutze den Aktualisierne Knopf oder `F5`, um ein Neuladen der Seite zu forcieren.",
  helpAddonMessage7Title: "Initialisieren des Dokumentes",
  helpAddonMessage7Description: "Gehe auf `Erweiterungen` -> `Wish Tally` -> `Initialise`, um alle notwendigen Daten für das Wish Tally sheet zu laden.",
  /*
   * help-import Command
   */
  helpImportEmoji: "📥",
  helpImportCustomId: "[LOAD_HELP_IMPORT]",
  helpImportName: "Wünsche importieren",
  helpImportTitle: "[EMOJI] Wie importiere ich Wünsche",
  helpImportDescription: "Es gibt mehrere Methoden, um Wünsche zum Wish Tally Dokument hinzuzufügen. Um Fehler zu vermeiden, ist es ratsam den `Auto Import` zu nutzen.",
  helpImportDescriptionAutoTitle: "[EMOJI] Auto Import (Empfohlen)",
  helpImportDescriptionAuto: "Erfordert eine Anmeldung im Spiel und das Extrahieren der URL des Wunschverlaufes.",
  helpImportDescriptionManualTitle: "[EMOJI] Manueller Import",
  helpImportDescriptionManual: "Kopiere einfach die Wünsche und füge sie direkt im Sheet ein. Dazu müssen aber die Override Regeln eingehalten werden, damit die richtige reihenfolge eingehalten werden kann. Es gibt Tools, um die Methode zu  vereinfachen.",
  helpImportDescriptionExportTitle: "[EMOJI] Konvertieren einer Exportdatei zum Wish Tally",
  helpImportDescriptionExport: "Wenn du ein Backup deiner Wünsche eines alternativen Trackers hast, kannst du einen export Konverter verwenden.",
  /*
   * help-import-auto Command
   */
  helpImportAutoEmoji: "🖥️",
  helpImportAutoCustomId: "[LOAD_HELP_IMPORT_AUTO]",
  helpImportAutoName: "Auto Import",
  helpImportAutoTitle: "[EMOJI] Auto Import der Wünsche",
  
  helpImportAutoMessageDescription: "Diese Funktion hilft dir dabei, deine Wünsche über die miHoYo-API automatisch in dein Wish Tally sheet zu importieren. Das funktioniert, indem du die URL verwendest und den Schlüssel extrahierst. Mit dem Schlüssel kommuniziert es dann direkt mit miHoYo in deinem Namen, um deinen Wunschverlauf im Spiel zu überprüfen und alle neu gefundenen Wünsche in deinem Wish Tally sheet zu speichern. Du brauchst keine manuellen Eingaben zu machen, da dies automatisch für dich erledigt wird. Du kannst immer noch die Methode des Kopierens und Einfügens als sicherere Methode zum Speichern des Wunschverlaufs verwenden, aber wenn du diese einfachere Option nutzen möchtest, kannst du die folgenden Schritte befolgen:\n**Bitte beachte, dass alle Wünsche, die älter als 6 Monate sind, auf diese Weise nicht abgerufen werden können, du musst sie speichern, bevor sie nicht mehr sichtbar sind.",
  helpImportAutoMessage2Title: "PC Schritt 1 - URL generieren",
  helpImportAutoMessage2Description: "Logge dich in Genshin Impact ein, öffne das Wunschmenü und gehe zu den Details des Wunschverlaufs (es spielt keine Rolle, welchen Bannerverlauf du siehst). Dadurch wird die URL in deiner Genshin Impact-Protokolltextdatei generiert.",
  helpImportAutoMessage3Title: "Schritt 2 - das log file finden",
  helpImportAutoMessage3Description: "Öffne den Explorer und füge folgendes in die Adressbar ein und drücke Enter:\n`%USERPROFILE%/AppData/LocalLow/miHoYo/Genshin Impact/`",
  helpImportAutoMessage4Title: "Schritt 3 - Extrahieren der URL",
  helpImportAutoMessage4Description: "Mache einen Rechtsklick auf die Datei `output_log.txt` und klicke auf Bearbeiten",
  helpImportAutoMessage5Title: "Schritt 4 - Kopieren der URL",
  helpImportAutoMessage5Description: "Am Ende des log files findest du die URL, welche so beginnt:\n\n```https://webstatic-sea.mihoyo.com/............game_biz=h4e_global#/log```\n\nMarkiere die URL und kopiere sie",
  helpImportAutoMessage6Title: "Schritt 5 - Auto Import beginnen",
  helpImportAutoMessage6Description: "Stelle sicher, dass die Dropdown Option auf `Auto Import from miHoYo` steht und klicke auf das import icon, um zu beginnen.",
  helpImportAutoMessage7Title: "Schritt 6",
  helpImportAutoMessage7Description: "Kopiere die URL nun in das Popup Fenster und drücke `OK`.",
  helpImportAutoMessage8Title: "Für den China Server",
  helpImportAutoMessage8Description: "Ändere den Server zu `China` in den `Settings`, bevor du den Auto Import nutzt.",
  /*
   * help-import-manual Command
   */
  helpImportManualEmoji: "🖱️",
  helpImportManualCustomId: "[LOAD_HELP_IMPORT_MANUAL]",
  helpImportManualName: "Manueller Import",
  helpImportManualTitle: "[EMOJI] Manually Import Wishes",
  helpImportManualMessageDescription: "In Wish Tally kannst du als Alternative zum Auto-Import deinen Wunschverlauf auch manuell kopieren und einfügen. Für diese Methode sind keine zusätzlichen Tools erforderlich. Es ist jedoch wichtig, die Overridespalte für 10 Wunschabrufe (gleiches Datum und gleiche Uhrzeit) zu verwenden, um sicherzustellen, dass die Wünsche in der richtigen Reihenfolge gespeichert werden.",
  helpImportManualMessage2Title: "Schritt 1 - Kopieren des Wunschverlaufes zum Wish Tally",
  helpImportManualMessage2Description: "Gehe zum Wunschmenü und öffne 'Log'.\n\nMarkiere die Wünsche und kopiere sie mit `STRG+C` (Rechtsklick funktioniert nicht).",
  helpImportManualMessage3Title: "Schritt 2",
  helpImportManualMessage3Description: "Öffne den gewünschten Wunschverlauf im sheet.",
  helpImportManualMessage4Title: "Einfügen der Werte",
  helpImportManualMessage4Description: "Klicke auf die erste Zelle in der Reihe A und füge die Daten mit `STRG + V` or `CTRL+ Shift + V` (Einfügen nur der Werte) ein.",
  helpImportManualMessage5Title: "Einfügefehler",
  helpImportManualMessage5Description: "Wenn der eingefügte Wert so aussieht, dann sollte ein Einfügen mittels Rechtsklickmenü vermieden werden.",
  helpImportManualMessage6Title: "Schritt 3 - Managing 10-Wish Pulls using Overrides (Very Important)",
  helpImportManualMessage6Description: "Alle Wünsche in einem 10er-Multi haben denselben Zeitstempel und dasselbe Datum. Da der Genshin-Wunschverlauf von der neuesten zur ältesten angezeigt wird, können wir davon ausgehen, dass der letzte Eintrag in dem 10er-Multi der Wunsch Nummer 1 ist.\n\nKopiere zunächst den Verlauf mit der zuvor gezeigten Methode und nummeriere dann die Einträge auf der Registerkarte 'Override' des sheets nach dieser Methode.\n\nIm folgenden Beispiel wäre der Rabenbogen am Ende der Liste der erste Wunsch",
  helpImportManualMessage7Title: "",
  helpImportManualMessage7Description: "Füge die Werte ein und trage den Ovverride manuell ein.",
  helpImportManualMessage8Title: "",
  helpImportManualMessage8Description: "Fahre mit der nächsten Seite fort (z.B. gehe nach Seite 13 auf Seite 14) und mache dasselbe für die verbleibenden 10 Multis.",
  helpImportManualMessage9Title: "Schritt 4 - Wünsche sortieren",
  helpImportManualMessage9Description: "Stelle sicher, dass für alle Mehrfachwünsche Overridenummern eingegeben wurden, sonst ist die Sortierung falsch.\n\nKlicke dann auf die Schaltfläche 'Sort' oben auf dem Blatt.\n\nWenn die Sortierung angewendet wird, sortiert der Override automatisch die Mehrfachwünsche von 1 bis 10 und die Einzelwünsche in der Reihenfolge von Datum und Uhrzeit.",
  /*
   * help-import-export Command
   */
  helpImportExportEmoji: "⛏️",
  helpImportExportCustomId: "[LOAD_HELP_IMPORT_EXPORT]",
  // List of options
  helpImportExportMessageOptionLayout: "\n[PROJECT_NAME] `[FILE_TYPE]`- <[URL]>",
  exportOption1ProjectName: "Genshin Wish Export",
  exportOption1FileType: "XLSX file",
  exportOption1URL: "https://github.com/biuuu/genshin-wish-export",
  exportOption2ProjectName: "Genshin Wishes",
  exportOption2FileType: "CSV file",
  exportOption2URL: "https://genshin-wishes.com",
  exportOption3ProjectName: "paimon.moe",
  exportOption3FileType: "XLSX file",
  exportOption3URL: "https://paimon.moe",

  helpImportExportName: "Export Import",
  helpImportExportTitle: "[EMOJI] Importiere Wünsche aus einem Export",
  helpImportExportMessageDescription: "Nutze dieses Konverterdokument, um dabei zu helfen deine Wünsche im Wish Tally sheet einfügen zu können.\n<[URL]>\n\n**Supported Export Files**",

  helpImportExportMessage2Title: "Erstelle eine Kopie des sheets",
  helpImportExportMessage2Description: "Du benötigst einen Google Account, bevor du das sheet nutzen kannst. Erstelle eine Kopie des sheets in deinem Google Drive.\n<[URL]>\n\nUnter `Datei` klicke auf `Kopie erstellen`. Das erstellt eine Kopie des sheets in deinem Drive, welche von dir modifiziert, bzw. deinen Wunschverlauf beinhalten kann.\n\nEs öffnet sich ein `Dokument kopieren` Popup, welches umbenannt und dann gespeicher werden kann.",
  helpImportExportMessage3Title: "Check das README",
  helpImportExportMessage3Description: "Um das Dokument besser zu verstehen, schaue ins Readme",
}