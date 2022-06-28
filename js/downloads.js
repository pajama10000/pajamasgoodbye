const TAGS_URL = "https://api.github.com/repos/OctopusMC/octopus/tags"
const LATEST_URL = "https://api.github.com/repos/OctopusMC/octopus/releases/latest"
const RELEASE_URL = "https://api.github.com/repos/OctopusMC/octopus/releases/"

$.get(LATEST_URL, (res) => {
    if (res.message != null) {
        $("#downloads").prepend(getRelease("Latest", res.tag_name, true))
    }
})

$.get(TAGS_URL, (res) => {
    if (res.message != null) {
        for (r of res) {
            $("#downloads").append(getRelease(r.name, r.name))
        }
    }
})

function getRelease(text, version, latest) {
    return `
    <button class="download${latest ? "latest" : ""}" onclick="openUrl('${RELEASE_URL + version}')>
        Download ${text} <i class="fa-solid fa-download"></i>
    </button>`
}