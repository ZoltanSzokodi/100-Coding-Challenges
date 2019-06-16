function domainType(domains: string[]): string[] {
  let domainArr: string[] = [];

  domains
    .map(element => element.split("."))
    .forEach(subElement => {
      if (subElement.indexOf("org") !== -1) {
        domainArr.push("organization");
      } else if (subElement.indexOf("com") !== -1) {
        domainArr.push("commercial");
      } else if (subElement.indexOf("net") !== -1) {
        domainArr.push("network");
      } else if (subElement.indexOf("info") !== -1) {
        domainArr.push("information");
      }
    });

  return domainArr;
}

console.log(
  domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"])
);
