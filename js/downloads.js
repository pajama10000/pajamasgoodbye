const TAGS_URL = "https://api.github.com/repos/CanadaMC/canadamc/tags"
const RELEASE_URL = "https://github.com/canadamc/canadamc/releases/tag/"

const TEST_URL = "https://api.github.com/repos/Matt-MX/AnnouncerVelocity/tags"
const MAX_RELEASES = 20;

$.getJSON(TAGS_URL, (res) => {
    if (res.message == null && res.legth > 0) {
        $("#downloads").html("")
        i = 1;
        for (release of res) {
            if (i == 1) {
                $("#downloads").append(getRelease(`Latest (v${release.name})`, release.name, true))
            }
            else {
                $("#downloads").append(getRelease(release.name, release.name))
            }
            i++
            if (i > MAX_RELEASES || i == res.length) {
                console.log("hi");
                $("#downloads").append(`<br><button onclick="openUrl('${RELEASE_URL.replace("tag/", "")}')"><div></div>View all downloads</button>`)
                return;
            }
        }
    }
})

function getRelease(text, version, latest) {
    return `
    <button class="download ${latest ? "latest" : ""}" onclick="openUrl('${RELEASE_URL + version}')">
        Download ${text} <i class="fa-solid fa-download"></i>
    </button>`
}